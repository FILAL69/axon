export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-6xl font-bold mb-4">OSYX</h1>
      <p className="text-xl text-gray-400 mb-8 text-center max-w-md">
        The AI Brain That Remembers You.
      </p>
      <button className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-300 transition">
        Start Chat
      </button>
    </div>
  );
}
