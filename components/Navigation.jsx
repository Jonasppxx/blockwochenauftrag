// components/Navigation.jsx
'use client';
import Link from 'next/link';

const Navigation = ({ activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 z-10">
      <ul className="flex justify-center space-x-8">
        {['section1', 'section2', 'section3'].map((section) => (
          <li key={section} className="relative">
            <Link
              href={`#${section}`}
              className={`
                px-4 
                py-2 
                text-gray-600 
                hover:text-gray-900 
                transition-colors 
                duration-300
                ${activeSection === section ? 'text-gray-900' : ''}
              `}
            >
              {`Section ${section.slice(-1)}`}
            </Link>
            {/* Unterstreichung */}
            <span 
              className={`
                absolute 
                left-0 
                bottom-0 
                w-full 
                h-0.5 
                bg-blue-500 
                transition-transform 
                duration-300 
                transform 
                translate-y-1.5
                ${activeSection === section ? 'scale-x-100' : 'scale-x-0'}
              `}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;