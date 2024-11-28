// components/ClientLayout.jsx
'use client';

import { useState, useEffect } from 'react';
import Navigation from './Navigation.jsx';

const ClientLayout = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // 60% der Sektion muss sichtbar sein
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    // Bereinigung beim Unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 z-10">
        <Navigation activeSection={activeSection} />
      </header>
      <main className="pt-20">{children}</main>
      <style jsx global>{`
        section {
          scroll-margin-top: 80px; /* Sicherstellen, dass Abschnittsüberschriften nicht hinter der Navigation verschwinden */
        }
      `}</style>
    </div>
  );
};

export default ClientLayout;