export default function Try() {
  return (
    <main style={{
      minHeight:'100vh', display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', background:'#000', color:'#fff',
      fontFamily:'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
      textAlign:'center', padding:'24px'
    }}>
      <h1 style={{fontSize:'clamp(32px,5vw,56px)', margin:'0 0 12px'}}>Coming Soon</h1>
      <p style={{color:'#9aa0a6'}}>Your private, luxury-grade AI interface is almost here.</p>
      <a href="/" style={{marginTop:20, color:'#fff', textDecoration:'none', border:'1px solid rgba(255,255,255,.15)', padding:'10px 18px', borderRadius:999}}>
        Back to Home
      </a>
    </main>
  );
}
