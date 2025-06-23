import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ title, children, id, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 border-b border-dark-border last:border-b-0 ${className}`}>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary tracking-tight">{title}</h2>
        <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;