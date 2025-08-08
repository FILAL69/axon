export default function Home() {
  return (
    <main style={{
      minHeight:'100vh', display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', background:'#000', color:'#fff',
      fontFamily:'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
      textAlign:'center', padding:'24px'
    }}>
      {/* Optional logo — remove this <img> if it 404s */}
      <img src="/vault-logo.png" alt="Logo" style={{width:120, marginBottom:20}} />

      <h1 style={{fontSize:'clamp(36px,6vw,72px)', margin:'0 0 12px'}}>VaultAI</h1>
      <p style={{color:'#9aa0a6', maxWidth:700, margin:'0 0 28px'}}>Precision beyond limits.</p>

      <a href="/try" style={{
        display:'inline-block', padding:'14px 28px', borderRadius:999,
        border:'1px solid rgba(255,255,255,.15)',
        background:'linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03))',
        color:'#fff', textDecoration:'none'
      }}>
        Launch Experience
      </a>
    </main>
  );
}







