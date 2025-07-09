import Link from 'next/link';

const universes = [
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    description: 'Transforming Ideas into Digital Reality',
  },
  {
    id: 'brand-experience',
    title: 'Brand Experience',
    description: 'Crafting Memorable Brand Journeys',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Storytelling That Captivates',
  },
  {
    id: 'technology-solutions',
    title: 'Technology Solutions',
    description: "Building Tomorrow's Infrastructure",
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    description: 'Guiding Your Digital Evolution',
  },
];

export default function UniversesPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-100 mb-12 text-center">Our Creative Universes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universes.map((u) => (
            <Link key={u.id} href={`/universes/${u.id}`} className="block p-8 rounded-2xl bg-white/10 hover:bg-blue-600/30 transition shadow-lg">
              <h2 className="text-2xl font-bold text-blue-200 mb-2">{u.title}</h2>
              <p className="text-blue-100">{u.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 