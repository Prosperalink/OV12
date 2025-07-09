'use client';

import { Play, ArrowRight, Star } from 'lucide-react';
import AnimationObserver from '../ui/AnimationObserver';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-section-light dark:bg-section-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-poster.svg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-cinematic-blue"></div>
        </video>
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Fallback Background for when video fails to load */}
      <div className="absolute inset-0 z-0 bg-cinematic-blue opacity-90">
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Main Heading */}
        <AnimationObserver animationClass="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block animate-slide-in-left">Orson</span>
            <span className="block animate-slide-in-right text-cinematic-gold">Vision</span>
          </h1>
        </AnimationObserver>

        {/* Subtitle */}
        <AnimationObserver animationClass="fade-in" className="mb-8">
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Cinematic Humanism in Digital Innovation
          </p>
        </AnimationObserver>

        {/* Description */}
        <AnimationObserver animationClass="fade-in" className="mb-12">
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80 leading-relaxed">
            We craft immersive digital experiences that blend cutting-edge technology 
            with human-centered design, creating moments that inspire and transform.
          </p>
        </AnimationObserver>

        {/* CTA Buttons */}
        <AnimationObserver animationClass="fade-in" className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-cinematic-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 group">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="glass px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 group">
            <Play className="w-5 h-5" />
            Watch Our Story
          </button>
        </AnimationObserver>

        {/* Social Proof */}
        <AnimationObserver animationClass="fade-in" className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 from 200+ clients</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-white opacity-30"></div>
          
          <div className="flex items-center gap-2">
            <span>Trusted by</span>
            <span className="font-semibold">500+</span>
            <span>businesses</span>
          </div>
        </AnimationObserver>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
} 