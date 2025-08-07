// pages/index.js

export default function Home() {
  return (
    <div style={styles.container}>
      <img src="/vault-logo.png" alt="VaultAI Logo" style={styles.logo} />
      <h1 style={styles.title}>VaultAI</h1>
      <p style={styles.tagline}>Unleash intelligence. Redefined simplicity.</p>
      <a href="/try" style={styles.button}>Try VaultAI</a>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000000", // deep black
    color: "#ffffff",           // pure white text
    height: "100vh",
    width: "100vw",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    textAlign: "center",
  },
  logo: {
    width: 120,
    height: "auto",
    marginBottom: 30,
  },
  title: {
    fontSize: "3rem",
    fontWeight: "600",
    margin: 0,
    letterSpacing: "1px",
  },
  tagline: {
    fontSize: "1.2rem",
    color: "#888888",
    marginTop: 10,
    marginBottom: 40,
  },
  button: {
    backgroundImage: "linear-gradient(90deg, #ff4d4d, #ffb347)", // Ferrari red to yellow (like a sporty gradient)
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "500",
    textDecoration: "none",
    padding: "12px 28px",
    borderRadius: "50px",
    transition: "0.3s",
  },
};





