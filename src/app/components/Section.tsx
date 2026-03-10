import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </section>
  );
}
