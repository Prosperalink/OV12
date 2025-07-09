import HeroSection from '@/components/sections/HeroSection';
import SolutionsMatrix from '@/components/sections/CreativeUniverses';
import ClientJourney from '@/components/sections/ClientJourney';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactForm from '@/components/features/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SolutionsMatrix />
      <ClientJourney />
      <TestimonialsSection />
      <ContactForm />
    </main>
  );
}
