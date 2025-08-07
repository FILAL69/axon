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

      {/* Button with rainbow Siri-style gradient */}
      <a
        href="/try"
        style={{
          padding: '1rem 2rem',
          background: 'linear-gradient(90deg, #ff0057, #ff7b00, #ffee00, #00ff87, #00cfff, #a200ff, #ff0057)',
          backgroundSize: '300% 300%',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
          animation: 'rainbowMove 6s ease infinite',
        }}
      >
        Try VaultAI
      </a>

      {/* Keyframe style for animation */}
      <style jsx>{`
        @keyframes rainbowMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}



