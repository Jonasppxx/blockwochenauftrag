// app/page.jsx
'use client';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <section id="section1" className="w-full py-20 px-8 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Spielzeuge</h2>
          <div className="space-y-6">
            <div className="max-w-none">
              <p className="text-lg leading-relaxed">
                Die Puppe von Jutta ist ein besonderes Stück, das uns eindrucksvoll zeigt, 
                wie Kinder früher ihre Freizeit gestaltet haben. Früher spielten ausschließlich 
                Mädchen mit Puppen. Sie erzählte uns, dass Jungs, die mit Puppen spielen, nicht 
                gern gesehen wurden. Solche Rollenbilder waren klar vorgegeben. Stattdessen 
                beschäftigten sich Jungen oft mit Ästen, bauten viele verschiedene Dinge zusammen 
                oder ließen ihrer Kreativität auf andere Weise freien Lauf.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Interview zum Thema:</h3>
              <div className="flex items-center p-4 bg-white rounded-lg border border-gray-300 shadow-md">
                <div className="mr-4">
                  {/* Optional: Add an icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium">Interview - Puppe</p>
                  <audio className="w-full mt-2" controls>
                    <source src="/puppe.mp3" type="audio/mpeg" />
                    Ihr Browser unterstützt das Audio-Element nicht.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="w-full py-20 px-8 bg-gray-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ausbildung</h2>
          <div className="space-y-6">
            <div className="max-w-none">
              <p className="text-lg leading-relaxed">
                Die Mütze spielt eine große Rolle in Juttas Leben und ist mehr als nur ein Accessoire. 
                Sie arbeitete als Verkäuferin in einem Detailhandelsladen und hatte täglich mit Mode 
                und Kleidungsstücken zu tun, das war ihr Ding. Die Mütze stammt aus den 1950ern und 
                gibt uns einen kleinen Einblick, wie der Stil in ihrer Zeit war. Sie ist nicht nur 
                ein cooles Vintage-Teil, sondern erzählt auch ein Stück ihrer persönlichen Geschichte.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Interview zum Thema:</h3>
              <div className="flex items-center p-4 bg-white rounded-lg border border-gray-300 shadow-md">
                <div className="mr-4">
                  {/* Optional: Add an icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium">Interview - Mütze</p>
                  <audio className="w-full mt-2" controls>
                    <source src="/muetze.mp3" type="audio/mpeg" />
                    Ihr Browser unterstützt das Audio-Element nicht.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="w-full py-20 px-8 bg-[#BFBFBF]">
        <div className="max-w-4xl mx-auto">
          {/* Überschrift und Text anzeigen */}
          <h2 className="text-4xl font-bold mb-6">Geschichtsvideo</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Ihr Name ist Jutta Glück. Jutta ist 1940 geboren. Sie wuchs in Deutschland auf und lebte seitdem in Deutschland. Sie lernte Verkaufsfrau und übte den Beruf ihr Leben lang aus.
            In ihrem 17 Lebensjahr lernte sie den Mann ihrer Träume kennen und heiratete ihn im 19. Lebensjahr auch. Sie ist seitdem glücklich mit ihm.
          </p>
          <div className="relative aspect-video">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover" 
              playsInline 
              controls 
              aria-label="Geschichtsvideo von Jutta Glück"
            >
              <source src="/Geschichtsvideo.mp4" type="video/mp4" />
              Ihr Browser unterstützt das Video-Element nicht.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}