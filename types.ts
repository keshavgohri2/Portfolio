import React from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  leetcode: string;
  github: string;
  location: string;
  summary: string;
  tagline: string;
  heroImageUrl: string;
  cvUrl?: string; // Optional CV download link
  // technicalSkills?: TechnicalSkills; // Can be added here if preferred
}

export interface TechnicalSkillCategory {
  categoryName: string;
  skills: string[];
}

export interface TechnicalSkills {
  Languages: string[];
  AndroidDevelopment: string[];
  Architectures: string[];
  ToolsPlatforms: string[];
  Other: string[];
}


export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  cgpa: string;
  batch: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  location: string;
  responsibilities: string[];
  technologiesUsed?: string[];
}

export interface ProjectItem {
  name: string;
  primaryTech: string;
  description: string;
  imageUrl: string;
  technologiesInvolved?: string[];
  githubUrl?: string;
  youtubeUrl?: string; 
}

export interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  label?: string; // Made label optional
  ariaLabel: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg'; // Added size prop
  showLabelOnMobile?: boolean; // New prop to control label visibility on mobile
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
  className?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface NavbarProps {
  navItems: NavItem[];
  personalInfo: Pick<PersonalInfo, 'name'>;
}

export interface HeroProps {
  personalInfo: Pick<PersonalInfo, 'name' | 'title' | 'tagline' | 'heroImageUrl' | 'email' | 'linkedin' | 'github' | 'cvUrl'>;
}