// components/ClientLayout.jsx
'use client';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function ClientLayout({ children }) {
  const [activeSection, setActiveSection] = useState('section1');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 z-10">
        <Navigation activeSection={activeSection} />
      </header>
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}