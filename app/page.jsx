// app/page.jsx
'use client';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <>
      <section id="section1" className="min-h-screen w-full p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Section 1</h2>
          <div className="space-y-4">
            <p className="text-lg">
              You are currently viewing: <span className="font-bold">Section 1</span>
            </p>
            <p className="text-lg">
              Dies ist der Inhalt der ersten Sektion. Scrollen Sie weiter, um zu sehen, wie die aktive Sektion aktualisiert wird.
            </p>
          </div>
        </div>
      </section>

      <section id="section2" className="min-h-screen w-full p-8 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Section 2</h2>
          <div className="space-y-4">
            <p className="text-lg">
              You are currently viewing: <span className="font-bold">Section 2</span>
            </p>
            <p className="text-lg">
              Dies ist der Inhalt der zweiten Sektion. Beachten Sie, wie die Navigation beim Scrollen die aktive Sektion hervorhebt.
            </p>
          </div>
        </div>
      </section>

      <section id="section3" className="min-h-screen w-full p-8 bg-gray-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Section 3</h2>
          <div className="space-y-4">
            <p className="text-lg">
              You are currently viewing: <span className="font-bold">Section 3</span>
            </p>
            <p className="text-lg">
              Dies ist der Inhalt der dritten Sektion. Die aktive Sektion wird beim Scrollen verfolgt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}