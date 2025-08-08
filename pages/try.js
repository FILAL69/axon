// pages/try.js
import { useState, useRef, useEffect } from 'react';

export default function Try() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to VaultAI. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function send() {
    if (!input.trim() || loading) return;
    const next = [...messages, { role: 'user', content: input.trim() }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next })
      });
      const data = await r.json();
      if (data?.reply) {
        setMessages([...next, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([...next, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
      }
    } catch (e) {
      setMessages([...next, { role: 'assistant', content: 'Network error.' }]);
    } finally {
      setLoading(false);
    }
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <img src="/vault-logo.png" alt="VaultAI" style={styles.logo} />
        <div style={styles.brand}>VaultAI</div>
      </header>

      <main style={styles.chat}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={m.role === 'assistant' ? styles.bubbleAI : styles.bubbleUser}
          >
            {m.content}
          </div>
        ))}
        {loading && <div style={styles.typing}>Thinking…</div>}
        <div ref={bottomRef} />
      </main>

      <form
        onSubmit={(e) => { e.preventDefault(); send(); }}
        style={styles.inputBar}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Type your message…"
          rows={1}
          style={styles.input}
        />
        <button type="submit" disabled={loading} style={styles.send}>
          Send
        </button>
      </form>
    </div>
  );
}

const styles = {
  page: { background:'#000', color:'#fff', minHeight:'100vh',
    display:'grid', gridTemplateRows:'auto 1fr auto',
    fontFamily:'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
  },
  header: { display:'flex', alignItems:'center', gap:12, padding:'14px 18px', borderBottom:'1px solid rgba(255,255,255,.08)'},
  logo: { width:28, height:'auto' },
  brand: { fontWeight:700, letterSpacing:.5 },
  chat: { padding:'18px', display:'flex', flexDirection:'column', gap:12, overflowY:'auto' },
  bubbleAI: { alignSelf:'flex-start', maxWidth:'80%',
    background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.12)',
    borderRadius:12, padding:'10px 12px', lineHeight:1.5
  },
  bubbleUser: { alignSelf:'flex-end', maxWidth:'80%',
    background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.18)',
    borderRadius:12, padding:'10px 12px', lineHeight:1.5
  },
  typing: { color:'#9aa0a6', fontSize:14, padding:'0 6px' },
  inputBar: { display:'flex', gap:10, padding:'10px 12px', borderTop:'1px solid rgba(255,255,255,.08)' },
  input: { flex:1, resize:'none', background:'rgba(255,255,255,.06)', color:'#fff',
    border:'1px solid rgba(255,255,255,.15)', borderRadius:10, padding:'10px 12px', outline:'none'
  },
  send: { background:'transparent', color:'#fff', border:'1px solid rgba(255,255,255,.25)',
    borderRadius:10, padding:'10px 16px', cursor:'pointer'
  }
};

