import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-100 text-blue-100 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/universes" className="hover:underline">Universes</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/team" className="hover:underline">Team</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/careers" className="hover:underline">Careers</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/legal" className="hover:underline">Legal</Link>
        </div>
        <div className="text-xs text-blue-200">&copy; {new Date().getFullYear()} Orson Vision. All rights reserved.</div>
      </div>
    </footer>
  );
} 