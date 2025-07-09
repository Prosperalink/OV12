'use client';

import { Play, ArrowRight, Star, Eye, Camera } from 'lucide-react';
import AnimationObserver from './AnimationObserver';

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
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-[#111827] to-[#1e3a8a]"></div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-[#111827]/60"></div>
      </div>

      {/* Fallback Background for when video fails to load */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#111827] to-[#1e3a8a] opacity-90">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-[#111827]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Logo Elements */}
        <AnimationObserver animationClass="fade-in" className="mb-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Camera className="w-8 h-8 text-[#F59E0B]" />
              <span className="text-2xl font-bold">ORSON</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-8 h-8 text-[#F59E0B]" />
              <span className="text-2xl font-bold text-[#F59E0B]">VISION</span>
            </div>
          </div>
        </AnimationObserver>

        {/* Main Heading */}
        <AnimationObserver animationClass="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block animate-slide-in-left">Where Technology</span>
            <span className="block animate-slide-in-right text-[#F59E0B]">Meets Humanity</span>
          </h1>
        </AnimationObserver>

        {/* Subtitle */}
        <AnimationObserver animationClass="fade-in" className="mb-8">
          <p className="text-xl md:text-2xl mb-6 opacity-90 font-light">
            Cinematic Humanism in Digital Innovation
          </p>
        </AnimationObserver>

        {/* Description */}
        <AnimationObserver animationClass="fade-in" className="mb-12">
          <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-80 leading-relaxed">
            We craft immersive digital experiences that blend cutting-edge technology with human-centered design. 
            Every pixel, every interaction, every moment is crafted with the precision of a filmmaker and the 
            innovation of a technologist. Your story deserves to be told cinematically.
          </p>
        </AnimationObserver>

        {/* Value Propositions */}
        <AnimationObserver animationClass="fade-in" className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="font-semibold mb-2">Cinematic Excellence</h3>
              <p className="text-sm opacity-70">Every experience crafted like a film scene</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="font-semibold mb-2">Human-Centered</h3>
              <p className="text-sm opacity-70">Technology that serves humanity</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h3 className="font-semibold mb-2">Performance First</h3>
              <p className="text-sm opacity-70">Speed and efficiency in everything</p>
            </div>
          </div>
        </AnimationObserver>

        {/* CTA Buttons */}
        <AnimationObserver animationClass="fade-in" className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl">
            Start Your Digital Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="glass px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 group border border-white/20">
            <Play className="w-5 h-5" />
            Watch Our Story
          </button>
        </AnimationObserver>

        {/* Social Proof */}
        <AnimationObserver animationClass="fade-in" className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span>4.9/5 from 200+ satisfied clients</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-white opacity-30"></div>
          
          <div className="flex items-center gap-2">
            <span>Trusted by</span>
            <span className="font-semibold text-[#F59E0B]">500+</span>
            <span>businesses across Tunisia</span>
          </div>
        </AnimationObserver>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-[#F59E0B] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#F59E0B] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
} 