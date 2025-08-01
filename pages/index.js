// pages/index.js

export default function Home() {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#0f172a',
      color: '#fff',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1>Welcome to Axon</h1>
      <p>This is your home page. Click below to try the assistant.</p>
      <a href="/try" style={{
        marginTop: '1.5rem',
        padding: '1rem 2rem',
        backgroundColor

