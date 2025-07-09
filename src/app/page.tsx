import { CinematicHero } from '@/components/HeroSection'
import { FadeInUp, StaggerContainer } from '@/components/AnimationObserver'
import SolutionsMatrix from '@/components/SolutionsMatrix'
import ClientJourney from '@/components/sections/ClientJourney'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactForm from '@/components/features/ContactForm'
import { typography } from '@/lib/fonts'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Cinematic Hero Section */}
      <CinematicHero
        title="Cinematic Humanism in Digital Innovation"
        subtitle="Crafting Immersive Digital Experiences"
        description="We blend cutting-edge technology with human-centered design to create moments that inspire, transform, and connect. Every pixel tells a story, every interaction evokes emotion."
        ctaText="Start Your Journey"
        ctaLink="/contact"
        videoSrc="/hero-video.mp4"
        posterSrc="/hero-poster.jpg"
      />

      {/* Solutions Matrix with Enhanced Animations */}
      <FadeInUp className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${typography.heading.h2} text-gray-900 dark:text-white mb-6`}>
              Our Digital Innovation Universe
            </h2>
            <p className={`${typography.body.lg} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto`}>
              Discover our comprehensive suite of services designed to transform your digital presence
            </p>
          </div>
          <SolutionsMatrix />
        </div>
      </FadeInUp>

      {/* Client Journey with Staggered Animations */}
      <StaggerContainer className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${typography.heading.h2} text-gray-900 dark:text-white mb-6`}>
              Your Journey to Digital Excellence
            </h2>
            <p className={`${typography.body.lg} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto`}>
              From concept to launch, we guide you through every step of your digital transformation
            </p>
          </div>
          <ClientJourney />
        </div>
      </StaggerContainer>

      {/* Testimonials with Cinematic Reveals */}
      <FadeInUp className="py-24 bg-gradient-to-br from-blue-50 to-gold-50 dark:from-blue-900 dark:to-gold-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${typography.heading.h2} text-gray-900 dark:text-white mb-6`}>
              Success Stories That Inspire
            </h2>
            <p className={`${typography.body.lg} text-gray-600 dark:text-gray-300 max-w-3xl mx-auto`}>
              Real transformations from real clients who trusted us with their digital vision
            </p>
          </div>
          <TestimonialsSection />
        </div>
      </FadeInUp>

      {/* Contact Form with Enhanced UX */}
      <FadeInUp className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${typography.heading.h2} text-gray-900 dark:text-white mb-6`}>
              Ready to Begin Your Transformation?
            </h2>
            <p className={`${typography.body.lg} text-gray-600 dark:text-gray-300 max-w-2xl mx-auto`}>
              Let's discuss how we can bring your digital vision to life with cinematic humanism
            </p>
          </div>
          <ContactForm />
        </div>
      </FadeInUp>

      {/* Cinematic Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className={`${typography.heading.h4} mb-4`}>
                Orson Vision
              </h3>
              <p className={`${typography.body.md} text-blue-200 mb-6`}>
                Cinematic Humanism in Digital Innovation. Crafting immersive experiences that inspire, transform, and connect.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className={`${typography.heading.h5} mb-4`}>Services</h4>
              <ul className={`${typography.body.sm} space-y-2 text-blue-200`}>
                <li><a href="/services/digital-innovation" className="hover:text-white transition-colors">Digital Innovation</a></li>
                <li><a href="/services/creative-design" className="hover:text-white transition-colors">Creative Design</a></li>
                <li><a href="/services/content-creation" className="hover:text-white transition-colors">Content Creation</a></li>
                <li><a href="/services/technology-solutions" className="hover:text-white transition-colors">Technology Solutions</a></li>
                <li><a href="/services/strategic-consulting" className="hover:text-white transition-colors">Strategic Consulting</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`${typography.heading.h5} mb-4`}>Contact</h4>
              <ul className={`${typography.body.sm} space-y-2 text-blue-200`}>
                <li>contact@orsonvision.com</li>
                <li>+216 XX XXX XXX</li>
                <li>Tunis, Tunisia</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-700 mt-12 pt-8 text-center">
            <p className={`${typography.body.sm} text-blue-300`}>
              © 2025 Orson Vision. All rights reserved. Cinematic Humanism in Digital Innovation.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
