// app/page.jsx
'use client';
import { useState, useEffect } from 'react';
import Layout from './layout.jsx'; // Updated import path

export default function Home() {
  const [activeSection, setActiveSection] = useState('section1');

  useEffect(() => {
    // Create an intersection observer to track which section is in view
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Section is considered in view when 60% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer when component unmounts
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Layout activeSection={activeSection}>
      <section id="section1" className="min-h-screen w-full p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Section 1</h2>
          <div className="space-y-4">
            <p className="text-lg">
              You are currently viewing: <span className="font-bold">{activeSection}</span>
            </p>
            <p className="text-lg">
              This is the first section. Scroll down to see how the active section updates.
            </p>
          </div>
        </div>
      </section>

      <section id="section2" className="min-h-screen w-full p-8 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Section 2</h2>
          <div className="space-y-4">
            <p className="text-lg">
              You are currently viewing: <span className="font-bold">{activeSection}</span>
            </p>
            <p className="text-lg">
              This is the second section. Notice how the navigation highlights change as you scroll.
            </p>
          </div>
        </div>
      </section>

      <section id="section3" className="min-h-screen w-full p-8 bg-gray-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Section 3</h2>
          <div className="space-y-4">
            <p className="text-lg">
              You are currently viewing: <span className="font-bold">{activeSection}</span>
            </p>
            <p className="text-lg">
              This is the third section. The active section is tracked as you scroll.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}