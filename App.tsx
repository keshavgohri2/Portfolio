import React from 'react';
import { PersonalInfo, EducationItem, ExperienceItem, ProjectItem, NavItem, TechnicalSkills } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import EducationCard from './components/EducationCard';
import Footer from './components/Footer';

const personalInfoData: PersonalInfo = {
  name: "Keshav Gohri",
  title: "Android Developer",
  email: "gohrikeshav9@gmail.com",
  phone: "9259896374",
  linkedin: "https://www.linkedin.com/in/keshav-gohri-450402254/",
  leetcode: "https://leetcode.com/keshavgohri/",
  github: "https://github.com/keshavgohri2",
  location: "Noida - 201301",
  summary: "Detail-oriented Android Developer with expertise in Java, Kotlin, Retrofit, and MVVM/Clean Architecture. Skilled in integrating Jetpack components (Room, WorkManager, LiveData) and SQLite for offline functionality. Adept at delivering clean, maintainable code, optimizing UI performance, and collaborating with teams to build secure, user-centric mobile apps.",
  tagline: "Crafting innovative and user-centric Android experiences. Passionate about clean code and cutting-edge mobile technologies.",
  heroImageUrl: "https://placehold.co/400x400/1E293B/E2E8F0?text=KG&font=poppins", // Replace with actual image URL
  cvUrl: "./Keshav_Gohri_Resume.pdf" // Example CV URL
};

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (Cloud Computing)",
    institution: "Parul University",
    location: "Vadodara",
    cgpa: "8.21",
    batch: "2025"
  }
];

const experienceData: ExperienceItem[] = [
  {
    role: "Junior Android Developer",
    company: "VMS TECHS",
    dates: "June 2024 – Present",
    location: "Noida",
    responsibilities: [
      "Contributing to the development and maintenance of Android applications using Kotlin and Java.",
      "Collaborating with senior developers on feature implementation and bug fixing.",
      "Working with modern Android development practices, including MVVM, Jetpack components, and API integration."
    ],
    technologiesUsed: ["Kotlin", "Java", "Android SDK", "MVVM", "Jetpack", "Retrofit", "Git"]
  },
  {
    role: "Android Developer Intern",
    company: "VMS TECHS",
    dates: "December 2023 – May 2024",
    location: "Noida",
    responsibilities: [
      "Developed two live apps: WizSuite HR (Kotlin) for HR tasks (attendance, leaves, check-in/out) and a Survey App (Java) with offline/online survey and check-in features.",
      "Worked with Retrofit, Volley, SQLite, MVVM, and handled JSON parsing, data binding, shared preference, postman and advanced UI widgets.",
      "Implemented features like custom camera with face detection, geofencing, Google Maps, notifications, runtime permissions, glide and background services."
    ],
    technologiesUsed: ["Kotlin", "Java", "Retrofit", "Volley", "SQLite", "MVVM", "JSON", "Data Binding", "Shared Preferences", "Postman", "Face Detection", "Geofencing", "Google Maps API", "Glide"]
  },
  {
    role: "Software Developer Intern",
    company: "Jiosphere",
    dates: "September 2023 – November 2023", 
    location: "Mumbai (remote)",
    responsibilities: [
      "Developed three key modules for a WebView-based browser app:",
      "1. Time Tracker Browser – Tracked user activity and generated reports on time spent per website.",
      "2. Focus Mode – Enabled users to set a timer restricting navigation to a specific URL.",
      "3. Restricted Mode – Implemented a toggle to block specified social media sites for distraction-free usage.",
      "Worked extensively with WebView, Java, timers, and custom site access control logic."
    ],
    technologiesUsed: ["Java", "WebView", "Android Timers", "Site Access Control Logic"]
  },
  {
    role: "Python programming with DSA Internship",
    company: "Ybi Foundation",
    dates: "January 2024 – March 2024",
    location: "Remote",
    responsibilities: [
      "Built 3 machine learning projects using Python on Google Colab:",
      "1. Big Sales Prediction using Random Forest Regressor",
      "2. Handwritten Digit Recognition with sklearn and image processing",
      "3. Movie Recommendation System using content-based filtering",
      "Gained practical experience in machine learning models, data preprocessing, and Python programming fundamentals."
    ],
    technologiesUsed: ["Python", "Machine Learning", "Scikit-learn", "Google Colab", "Data Preprocessing", "Random Forest Regressor", "Content-Based Filtering"]
  }
];


const projectData: ProjectItem[] = [
  { 
    name: "WizSuite HR", 
    primaryTech: "Kotlin", 
    description: "An HR management app for attendance, check-in/out, leaves, and regularization.", 
    imageUrl: "https://placehold.co/600x400/1E293B/E2E8F0?text=WizSuite+HR&font=poppins",
    githubUrl: "https://github.com/keshavgohri2/WizSuite-HR",
  },
  { 
    name: "Survey App", 
    primaryTech: "Java", 
    description: "A hybrid survey app with check-in/out, geofencing, and offline data sync.", 
    technologiesInvolved: ["Retrofit", "SQLite"], 
    imageUrl: "https://placehold.co/600x400/1E293B/E2E8F0?text=Survey+App&font=poppins",
    githubUrl: "https://github.com/keshavgohri2/Survey-App-Java",
  },
  { 
    name: "FitFlow", 
    primaryTech: "Java", 
    description: "A health and fitness app with workout, sleep, diet, water intake tracking, and BMI calculator.", 
    technologiesInvolved: ["SQLite"], 
    imageUrl: "https://placehold.co/600x400/1E293B/E2E8F0?text=FitFlow&font=poppins",
    githubUrl: "https://github.com/keshavgohri2/FitFlow",
    youtubeUrl: "https://www.youtube.com/watch?v=yourvideoid1"
  },
  { 
    name: "MorseMate", 
    primaryTech: "Java", 
    description: "A real-time English ↔ Morse code translator app.", 
    technologiesInvolved: ["Firebase"], 
    imageUrl: "https://placehold.co/600x400/1E293B/E2E8F0?text=MorseMate&font=poppins",
    githubUrl: "https://github.com/keshavgohri2/MorseMate",
  },
  { 
    name: "Browser App", 
    primaryTech: "Java", 
    description: "A WebView-based browser with focus mode, restricted mode, and time-tracking features.", 
    imageUrl: "https://placehold.co/600x400/1E293B/E2E8F0?text=Browser+App&font=poppins",
    githubUrl: "https://github.com/keshavgohri2/Browser-App",
  },
  { 
    name: "Echo Board", 
    primaryTech: "Kotlin", 
    description: "A quotes app allowing users to add, view, and delete quotes with local storage.", 
    technologiesInvolved: ["SQLite"], 
    imageUrl: "https://placehold.co/600x400/1E293B/E2E8F0?text=Echo+Board&font=poppins",
    githubUrl: "https://github.com/keshavgohri2/EchoBoard",
  },
  { 
    name: "Tic Tac Toe Game", 
    primaryTech: "Java", 
    description: "A classic two-player Android Tic Tac Toe game with basic game logic and UI.", 
    imageUrl: "https://placehold.co/600x400/1E293B/E2E8F0?text=Tic+Tac+Toe&font=poppins",
    githubUrl: "https://github.com/keshavgohri2/Tic-Tac-Toe-Game",
    youtubeUrl: "https://www.youtube.com/watch?v=yourvideoid2"
  }
];

const technicalSkillsData: TechnicalSkills = {
  Languages: ["Kotlin", "Java", "Python", "XML", "HTML"],
  AndroidDevelopment: ["Android SDK", "Jetpack (Room, LiveData, WorkManager)", "Retrofit", "Volley", "SQLite", "Coroutines", "Data Binding", "Glide", "Geofence"],
  Architectures: ["MVVM", "Clean Architecture"],
  ToolsPlatforms: ["Android Studio", "Git", "GitHub", "Postman", "Firebase", "Google Colab"],
  Other: ["JSON Parsing", "REST APIs"]
};

const certificationsUrl: string = "https://github.com/keshavgohri2/certifications";

const navItems: NavItem[] = [
  { name: 'Summary', href: '#summary' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' }, // Points to "Technical Skills & Certifications"
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-light-text-main">
      <Navbar navItems={navItems} personalInfo={{name: personalInfoData.name}} />
      <Hero personalInfo={personalInfoData} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-grow w-full max-w-screen-xl">
        <Section title="Professional Summary" id="summary" className="min-h-[calc(100vh-10rem)] flex flex-col justify-center">
          <p className="text-light-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">{personalInfoData.summary}</p>
        </Section>

        <Section title="Professional Experience" id="experience">
          <div className="space-y-8 md:space-y-12">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </Section>

        <Section title="Projects" id="projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>
        
        <Section title="Education" id="education">
          <div className="max-w-2xl mx-auto">
            {educationData.map((edu, index) => (
              <EducationCard key={index} education={edu} />
            ))}
          </div>
        </Section>

        <Section title="Technical Skills & Certifications" id="skills">
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6 text-center md:text-left">Technical Skills</h3>
              <div className="space-y-6">
                {(Object.keys(technicalSkillsData) as Array<keyof TechnicalSkills>).map((categoryKey) => (
                  <div key={categoryKey}>
                    <h4 className="text-xl font-poppins font-medium text-light-text-secondary mb-3">{categoryKey.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    <div className="flex flex-wrap gap-3">
                      {technicalSkillsData[categoryKey].map((skill, index) => (
                        <span key={index} className="bg-primary/20 text-primary text-base font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-primary/30 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-dark-border/50">
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6 text-center md:text-left">Certifications</h3>
              <div className="text-center md:text-left">
                <a 
                  href={certificationsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-hover font-medium transition-colors duration-300 inline-flex items-center group text-lg"
                  aria-label="View certifications on GitHub"
                >
                  View Certifications
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer name={personalInfoData.name} personalInfo={personalInfoData} />
    </div>
  );
};

export default App;