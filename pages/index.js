export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white text-center px-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">💼 VaultAI</h1>
        <p className="text-lg">Your private AI money assistant</p>
        <p className="mt-4 text-gray-400">
          Ask anything about saving, budgeting, investing… and get smart answers in seconds.
        </p>
        <div className="mt-8">
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
            Try the Assistant
          </button>
        </div>
      </div>
    </div>
  );
}
