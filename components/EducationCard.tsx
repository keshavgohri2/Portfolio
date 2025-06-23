import React from 'react';
import { EducationItem } from '../types';

interface EducationCardProps {
  education: EducationItem;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  const { degree, institution, location, cgpa, batch } = education;
  return (
    <div className="bg-card-bg p-6 md:p-8 rounded-xl shadow-xl hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300 ease-in-out border border-dark-border transform hover:-translate-y-1">
      <h3 className="text-xl md:text-2xl font-poppins font-semibold text-primary">{degree}</h3>
      <p className="text-lg font-medium text-light-text-secondary mt-1">{institution}</p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between text-sm text-light-text-tertiary mt-3 gap-x-4 gap-y-1">
        <span><span className="font-medium text-light-text-secondary">Location:</span> {location}</span>
        <span><span className="font-medium text-light-text-secondary">Batch:</span> {batch}</span>
        {cgpa && <span><span className="font-medium text-light-text-secondary">CGPA:</span> {cgpa}</span>}
      </div>
    </div>
  );
};

export default EducationCard;