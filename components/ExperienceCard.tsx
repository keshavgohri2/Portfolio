import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { role, company, dates, location, responsibilities, technologiesUsed } = experience;
  return (
    <div className="bg-card-bg p-6 md:p-8 rounded-xl shadow-xl hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300 ease-in-out border border-dark-border transform hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
        <h3 className="text-xl md:text-2xl font-poppins font-semibold text-primary">{role}</h3>
        <p className="text-sm text-light-text-tertiary mt-1 sm:mt-0 whitespace-nowrap">{dates}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4">
        <p className="text-lg font-medium text-light-text-secondary">{company}</p>
        <p className="text-sm text-light-text-tertiary mt-1 sm:mt-0">{location}</p>
      </div>
      
      <ul className="list-disc list-outside ml-5 space-y-2 text-light-text-secondary text-base leading-relaxed mb-5">
        {responsibilities.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      {technologiesUsed && technologiesUsed.length > 0 && (
        <div className="mt-4 pt-4 border-t border-dark-border/50">
          <h4 className="text-sm font-semibold text-light-text-secondary mb-2 uppercase tracking-wider">Key Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologiesUsed.map((tech, index) => (
              <span key={index} className="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full transition-colors">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;