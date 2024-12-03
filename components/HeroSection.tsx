'use client';

import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/finisher-header.es5.min.js'; // Path to the JS file in the public folder
    script.async = true;
    script.onload = () => {
      if (typeof window.FinisherHeader !== 'undefined') {
        new window.FinisherHeader({
          count: 100,
          size: { min: 2, max: 8, pulse: 0 },
          speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.6 } },
          colors: {
            background: '#202124',
            particles: ['#a084dc', '#fafafa', '#908d8b'],
          },
          blending: 'overlay',
          opacity: { center: 1, edge: 0 },
          skew: 0,
          shapes: ['c'],
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <header
      className="finisher-header flex items-center justify-center"
      style={{ width: '100%', height: '100vh', position: 'relative' }}
    >
      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl font-bold">
          Launch Your Tech Career with Real-World Experience
        </h1>
        <p className="mt-4 text-lg">
          Gain valuable skills through internships and project-based learning
        </p>
        <a
          href="/careers"
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-brightix-highlight text-brightix-text rounded-lg hover:bg-brightix-highlight/90 transition-all"
        >
          Explore Opportunities
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
