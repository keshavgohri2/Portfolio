import React from 'react';
import { PersonalInfo } from '../types';
import IconLink from './IconLink'; // Assuming IconLink is in the same directory or adjust path

// Define icons directly in Footer or import them if they are more complex
const LinkedInIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon: React.FC<{className?: string}> = ({className}) => (
 <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LeetCodeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0C10.027 0 7.834 2.043 7.834 5.378V18.623C7.834 21.957 10.027 24 13.483 24H18.738V20.559H13.483C11.954 20.559 11.239 19.825 11.239 18.283V5.717C11.239 4.175 11.954 3.441 13.483 3.441H18.738V0H13.483ZM5.262 0V24H0V0H5.262Z"/>
  </svg>
);


interface FooterProps {
  name: string;
  personalInfo: Pick<PersonalInfo, 'linkedin' | 'github' | 'leetcode' | 'email'>;
}

const Footer: React.FC<FooterProps> = ({ name, personalInfo }) => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { href: personalInfo.linkedin, icon: <LinkedInIcon />, ariaLabel: `${name}'s LinkedIn`, label: "LinkedIn" },
    { href: personalInfo.github, icon: <GitHubIcon />, ariaLabel: `${name}'s GitHub`, label: "GitHub" },
    { href: personalInfo.leetcode, icon: <LeetCodeIcon />, ariaLabel: `${name}'s LeetCode`, label: "LeetCode" },
  ];

  return (
    <footer className="bg-card-bg text-light-text-tertiary py-10 md:py-12 border-t border-dark-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map(link => (
            <IconLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              ariaLabel={link.ariaLabel}
              className="text-light-text-tertiary hover:text-primary"
              size="md"
            />
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Crafted with <span className="text-primary hover:underline">React</span>, <span className="text-primary hover:underline">TypeScript</span>, and <span className="text-primary hover:underline">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;