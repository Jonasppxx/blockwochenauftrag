// app/page.jsx
'use client';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <>
      <section id="section1" className="min-h-screen w-full p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Spielzeuge</h2>
          <div className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Die Puppe von Jutta ist ein besonderes Stück, das uns eindrucksvoll zeigt, 
                wie Kinder früher ihre Freizeit gestaltet haben. Früher spielten ausschliesslich 
                Mädchen mit Puppen. Sie erzählte uns, dass Jungs, die mit Puppen spielen nicht 
                gern gesehen wurden. Solche Rollenbilder waren klar vorgegeben. Stattdessen 
                beschäftigten sich Jungen oft mit Ästen, bauten viele verschiedene Dinge zusammen 
                oder liessen ihrer Kreativität auf andere Weise freien Lauf.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Interview zum Thema:</h3>
              <div className="p-4 bg-white rounded-lg shadow">
                <p className="mb-2 text-lg font-medium">Interview - Puppe</p>
                <audio controls className="w-full">
                  <source src="/puppe.mp3" type="audio/mpeg" />
                  Ihr Browser unterstützt das Audio-Element nicht.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section2" className="min-h-screen w-full p-8 bg-gray-200">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">Ausbildung</h2>
    <div className="space-y-6">
      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed">
          Die Mütze spielt eine grosse Rolle in Juttas Leben und ist mehr als nur ein Accessoire. 
          Sie arbeitete als Verkäuferin in einem Detailhandelsladen und hatte täglich mit Mode 
          und Kleidungsstücken zu tun, das war ihr Ding. Die Mütze stammt aus den 1950ern und 
          gibt uns einen kleinen Einblick, wie der Stil in ihrer Zeit war. Sie ist nicht nur 
          ein cooles Vintage-Teil, sondern erzählt auch ein Stück ihrer persönlichen Geschichte.
        </p>
      </div>
      
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Interview zum Thema:</h3>
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="mb-2 text-lg font-medium">Interview - Mütze</p>
          <audio controls className="w-full">
            <source src="/muetze.mp3" type="audio/mpeg" />
            Ihr Browser unterstützt das Audio-Element nicht.
          </audio>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="section3" className="min-h-screen w-full p-8 bg-gray-300">
        {/* ... */}
      </section>
    </>
  );
}