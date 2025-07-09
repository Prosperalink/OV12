import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-100 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1,2,3].map((i) => (
            <Link key={i} href={`/blog/article-${i}`} className="block p-8 rounded-2xl bg-white/10 hover:bg-blue-600/30 transition shadow-lg">
              <h2 className="text-2xl font-bold text-blue-200 mb-2">Article Title {i}</h2>
              <p className="text-blue-100">Short summary of the article (Placeholder)</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 