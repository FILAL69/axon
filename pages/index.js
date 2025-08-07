// pages/index.js

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0D1117',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <img
        src="/vault-logo.png" // make sure the image is named exactly like this
        alt="VaultAI Logo"
        style={{ width: '120px', marginBottom: '1.5rem' }}
      />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to VaultAI</h1>
      <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
        VaultAI helps you take control of your gut health using cutting-edge AI. Start exploring your personal gut assistant today.
      </p>
      <a href="/try" style={{
        padding: '1rem 2rem',
        backgroundColor: '#39D353',
        color: '#000',
        borderRadius: '8px',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}>
        Try VaultAI
      </a>
    </div>
  );
}

