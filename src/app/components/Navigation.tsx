import { useState, useEffect } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'experience', label: 'Experience' },
  { id: 'awards', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`py-4 px-2 whitespace-nowrap border-b-2 transition-colors ${
                activeSection === id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
