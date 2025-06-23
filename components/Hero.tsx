import React from 'react';
import { HeroProps } from '../types';
import IconLink from './IconLink';

// Re-define or import icons if they are complex and used in multiple places
const MailIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

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

const DownloadIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);


const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const { name, title, tagline, heroImageUrl, email, linkedin, github, cvUrl } = personalInfo;

  return (
    <section id="hero" className="bg-dark-bg pt-20 md:pt-24 relative overflow-hidden"> {/* Adjusted padding top for fixed navbar */}
      <div className="absolute inset-0 opacity-10">
        {/* Subtle background pattern or gradient if desired */}
        {/* Example: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5"></div> */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="min-h-[calc(100vh-5rem-4rem)] md:min-h-[calc(100vh-5rem-5rem)] flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left py-12 md:py-20"> {/* Adjusted top/bottom padding */}
          
          <div className="md:w-3/5 lg:w-1/2 md:pr-12 lg:pr-16 order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight">
              <span className="block text-light-text-main">Hi, I'm </span>
              <span className="block text-primary">{name}</span>
            </h1>
            <p className="mt-3 text-xl sm:text-2xl lg:text-3xl font-poppins font-medium text-light-text-secondary">
              {title}
            </p>
            <p className="mt-6 text-base sm:text-lg text-light-text-tertiary max-w-xl mx-auto md:mx-0">
              {tagline}
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 items-center">
              <IconLink 
                href={`mailto:${email}`} 
                icon={<MailIcon />} 
                label="Email Me" 
                ariaLabel={`Email ${name}`}
                className="text-light-text-secondary hover:text-primary"
                size="md"
                showLabelOnMobile={false}
              />
              <IconLink 
                href={linkedin} 
                icon={<LinkedInIcon />} 
                label="LinkedIn" 
                ariaLabel={`${name}'s LinkedIn Profile`}
                className="text-light-text-secondary hover:text-primary"
                size="md"
                showLabelOnMobile={false}
              />
              <IconLink 
                href={github} 
                icon={<GitHubIcon />} 
                label="GitHub" 
                ariaLabel={`${name}'s GitHub Profile`}
                className="text-light-text-secondary hover:text-primary"
                size="md"
                showLabelOnMobile={false}
              />
              {cvUrl && (
                 <a 
                    href={cvUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-dark-bg bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-primary transition-colors duration-300 group"
                    aria-label="Download CV"
                  >
                    Download CV
                    <DownloadIcon className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" />
                  </a>
              )}
            </div>
          </div>

          <div className="md:w-2/5 lg:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 transform -translate-x-2 -translate-y-2 lg:-translate-x-4 lg:-translate-y-4"></div>
              <img 
                src={heroImageUrl} 
                alt={`${name} - ${title}`} 
                className="relative w-full h-full rounded-full object-cover shadow-2xl border-4 border-card-bg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;