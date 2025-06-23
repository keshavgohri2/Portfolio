import React from 'react';
import { IconLinkProps } from '../types';

const IconLink: React.FC<IconLinkProps> = ({ 
  href, 
  icon, 
  label, 
  ariaLabel, 
  className = '', 
  size = 'md',
  showLabelOnMobile = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`flex items-center space-x-2 transition-colors duration-300 group ${className}`}
    >
      <span className={`group-hover:scale-110 transition-transform duration-200 ease-in-out ${sizeClasses[size]}`}>
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: sizeClasses[size] })}
      </span>
      {label && (
        <span 
          className={`
            ${textSizeClasses[size]} 
            ${showLabelOnMobile ? '' : 'hidden sm:inline'} 
            group-hover:underline
          `}
        >
          {label}
        </span>
      )}
    </a>
  );
};

export default IconLink;