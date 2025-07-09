export default function CareersPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-100 mb-8">Careers</h1>
        <p className="text-blue-100 mb-8">Join our team and help shape the future of digital innovation. (Placeholder content)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1,2].map((i) => (
            <div key={i} className="bg-white/10 rounded-2xl p-8 text-left shadow-lg">
              <h2 className="text-xl font-bold text-blue-200 mb-2">Position Title {i}</h2>
              <p className="text-blue-100">Short description of the position (Placeholder)</p>
              <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 