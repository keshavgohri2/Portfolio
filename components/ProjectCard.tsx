import React from 'react';
import { ProjectItem } from '../types';

const GitHubIconSmall: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const YouTubeIconSmall: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, primaryTech, description, imageUrl, technologiesInvolved, githubUrl, youtubeUrl } = project;
  return (
    <div className="bg-card-bg rounded-xl shadow-xl hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300 ease-in-out border border-dark-border flex flex-col h-full group transform hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[16/10] w-full rounded-t-xl"> {/* Adjusted aspect ratio */}
        <img 
          src={imageUrl} 
          alt={`${name} project screenshot`} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-poppins font-semibold text-primary group-hover:text-primary-hover transition-colors">{name}</h3>
            <span className="bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap ml-2">{primaryTech}</span>
          </div>
          <p className="text-light-text-secondary text-sm leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">{description}</p>
          {technologiesInvolved && technologiesInvolved.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-light-text-tertiary uppercase tracking-wider mb-1.5">Tech Stack:</h4>
              <div className="flex flex-wrap gap-1.5">
                {technologiesInvolved.map((tech, index) => (
                  <span key={index} className="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full transition-colors">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-4 border-t border-dark-border/50 flex items-center justify-start gap-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`View ${name} on GitHub`}
              className="text-light-text-tertiary hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5 group/link"
            >
              <GitHubIconSmall />
              <span className="text-sm group-hover/link:underline">GitHub</span>
            </a>
          )}
          {youtubeUrl && (
            <a 
              href={youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Watch ${name} demo on YouTube`}
              className="text-light-text-tertiary hover:text-red-500 transition-colors duration-300 inline-flex items-center gap-1.5 group/link"
            >
              <YouTubeIconSmall />
              <span className="text-sm group-hover/link:underline">YouTube</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;