// components/Navigation.jsx
'use client';
import Link from 'next/link';

const Navigation = ({ activeSection }) => {
  return (
    <nav className="flex justify-center items-center w-full">
      <ul className="flex gap-8">
        {['section1', 'section2', 'section3'].map((section) => (
          <li key={section}>
            <Link
              href={`#${section}`}
              className={`px-3 py-2 transition-all duration-300 relative
                ${activeSection === section ? 'font-semibold' : ''}
              `}
            >
              {`Section ${section.slice(-1)}`}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-300 
                ${activeSection === section ? 'scale-x-100' : 'scale-x-0'}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;