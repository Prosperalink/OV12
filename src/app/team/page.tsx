export default function teamPage() {
  return (
    <main className='min-h-screen py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-100'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-6xl font-bold text-blue-100 mb-8'>
          Meet the Team
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className='bg-white/10 rounded-2xl p-8 text-center shadow-lg'
            >
              <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-blue-700/40 flex items-center justify-center text-4xl text-blue-200'>
                👤
              </div>
              <h2 className='text-xl font-bold text-blue-200 mb-2'>
                Team Member {i}
              </h2>
              <p className='text-blue-100'>Role / Bio (Placeholder)</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
