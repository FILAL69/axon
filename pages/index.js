export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#fff',
      padding: '2rem'
    }}>
      {/* Logo */}
      <img 
        src="/vault-logo.png" 
        alt="VaultAI Logo" 
        style={{ width: '120px', marginBottom: '2rem' }} 
      />

      {/* Button */}
      <a
        href="/try"
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#111',
          color: '#0f0',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          boxShadow: '0 0 10px #0f0',
          transition: '0.3s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#222'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#111'}
      >
        Try VaultAI
      </a>
    </div>
  );
}


