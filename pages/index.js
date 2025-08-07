// pages/index.js

export default function Home() {
  return (
    <div style={styles.container}>
      <img src="/vault-logo.png" alt="Logo" style={styles.logo} />
      <h1 style={styles.title}>VaultAI</h1>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000000", // black background
    color: "#ffffff",           // white text
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
  },
  logo: {
    width: 150,
    height: "auto",
    marginBottom: 30,
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: 600,
    letterSpacing: "1px",
  },
};






