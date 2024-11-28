// components/Navigation.jsx
'use client';
import Link from 'next/link';

const Navigation = ({ activeSection }) => {
  return (
    <nav className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#section1"
              className={`px-3 py-2 transition-all ${
                activeSection === 'section1'
                  ? 'border-b-2 border-blue-500 font-bold'
                  : 'hover:border-b-2 hover:border-blue-500'
              }`}
            >
              Section 1
            </Link>
          </li>
          <li>
            <Link
              href="#section2"
              className={`px-3 py-2 transition-all ${
                activeSection === 'section2'
                  ? 'border-b-2 border-blue-500 font-bold'
                  : 'hover:border-b-2 hover:border-blue-500'
              }`}
            >
              Section 2
            </Link>
          </li>
          <li>
            <Link
              href="#section3"
              className={`px-3 py-2 transition-all ${
                activeSection === 'section3'
                  ? 'border-b-2 border-blue-500 font-bold'
                  : 'hover:border-b-2 hover:border-blue-500'
              }`}
            >
              Section 3
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-600">
          Aktuelle Section: {activeSection?.replace('section', 'Section ') || 'Keine'}
        </span>
      </div>
    </nav>
  );
};

export default Navigation;