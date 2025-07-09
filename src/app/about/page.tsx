import AnimationObserver from '@/components/ui/AnimationObserver';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen py-20 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
          <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-15"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <AnimationObserver>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About Orson Vision
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a team of digital artisans, storytellers, and technologists united by a shared vision: to create digital experiences that inspire, transform, and connect.
              </p>
            </div>
          </AnimationObserver>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Our Story */}
            <AnimationObserver>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Founded in 2020, Orson Vision emerged from a simple yet powerful belief: that technology should serve humanity, not replace it. Our name "Orson" pays homage to Orson Welles, the master storyteller who revolutionized cinema, while "Vision" represents our forward-thinking approach to digital innovation.
                  </p>
                  <p>
                    We believe in "Cinematic Humanism" - the art of crafting digital experiences that feel as compelling and emotionally resonant as the greatest films. Every project we undertake is approached with the same attention to detail, narrative structure, and emotional impact that goes into creating a cinematic masterpiece.
                  </p>
                  <p>
                    From our headquarters in Tunisia, we serve clients worldwide, bringing together diverse perspectives and cultural insights to create solutions that resonate across borders and languages.
                  </p>
                </div>
              </div>
            </AnimationObserver>

            {/* Our Mission */}
            <AnimationObserver>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cinematic-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎬</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Cinematic Excellence</h3>
                      <p className="text-gray-300 text-sm">
                        Every interaction is crafted like a film scene, with attention to pacing, emotion, and visual impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cinematic-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Human-Centered Design</h3>
                      <p className="text-gray-300 text-sm">
                        Technology serves humanity, not replaces it. We prioritize user experience and emotional connection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cinematic-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Innovation First</h3>
                      <p className="text-gray-300 text-sm">
                        We push boundaries while maintaining reliability, always exploring new technologies and approaches.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cinematic-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Global Impact</h3>
                      <p className="text-gray-300 text-sm">
                        From Tunisia to the world, we create solutions that transcend borders and cultural barriers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationObserver>
          </div>

          {/* Our Approach */}
          <AnimationObserver>
            <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
                  <p className="text-gray-300">
                    We dive deep into understanding your business, challenges, and aspirations to craft a tailored digital strategy.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold text-white mb-4">Design</h3>
                  <p className="text-gray-300">
                    Our creative team transforms your vision into stunning visual concepts and interactive prototypes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="text-xl font-bold text-white mb-4">Development</h3>
                  <p className="text-gray-300">
                    We build robust, scalable solutions using cutting-edge technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </AnimationObserver>

          {/* Our Values */}
          <AnimationObserver>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Excellence',
                    description: 'We pursue perfection in every detail, from code to design to user experience.',
                    icon: '⭐'
                  },
                  {
                    title: 'Innovation',
                    description: 'We constantly explore new technologies and creative approaches to solve complex problems.',
                    icon: '💡'
                  },
                  {
                    title: 'Collaboration',
                    description: 'We believe the best results come from working closely with our clients and partners.',
                    icon: '🤝'
                  },
                  {
                    title: 'Integrity',
                    description: 'We maintain the highest ethical standards and always put our clients\' interests first.',
                    icon: '🛡️'
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimationObserver>
        </div>
      </section>
    </main>
  );
} 