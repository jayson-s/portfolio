type SkillCategory = {
  category: string
  skills: string[]
}

type Project = {
  name: string
  description: string
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type Education = {
  institution: string
  degree: string
  grad: string
  id: string
}

type Certification = {
  company: string
  name: string
  date: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Java', 'C++', 'Python', 'Typescript', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    category: 'General',
    skills: [
      'Adaptability',
      'Collaboration',
      'Communication',
      'Critical Thinking',
      'Leadership',
      'Problem Solving',
      'Time Management',
    ],
  },
  {
    category: 'Technical',
    skills: [
      'CI/CD Pipelines',
      'Cloud Computing',
      'Database Management',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Software Architecture',
      'System Design',
      'Version Control (Git)',
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      'AWS Lambda',
      'Django',
      'Flask',
      'Flutter',
      'Next.js',
      'Node.js', 
      'React.js',
      'Spring Boot',
      'TensorFlow',
      'Terraform',
    ],
  },
  {
    category: 'Tools',
    skills: [
      'AWS',
      'Docker',
      'Firebase',
      'GitHub',
      'IntelliJ IDEA',
      'Jenkins',
      'Jira',
      'Kubernetes',
      'Linux',
      'MongoDB',
      'PostgreSQL',
      'VS Code',
      'Xcode',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Personal Portfolio',
    description: 'My legacy personal website built with HTML, CSS, & JavaScript before shifting to a modern Next.js based version.',
    link: 'https://jayson-s.github.io/',
    id: 'project1',
  },
  {
    name: 'Othello',
    description: 'An AI-powered Othello game built with Java and Minimax Algorithm, designed for competitive strategic gameplay.',
    link: 'https://github.com/jayson-s/othello',
    id: 'project2',
  },
  {
    name: 'LifeBalance+',
    description: 'A cross-platform wellness app built with Flutter, offering task management, habit tracking, and fitness analytics.',
    link: 'https://github.com/jayson-s/LifeBalancePlus',
    id: 'project3',
  },
  {
    name: 'Banking System',
    description: 'A scalable C++ banking system designed for secure account management, transactions, and financial data integrity.',
    link: 'https://github.com/jayson-s/Banking-System',
    id: 'project4',
  },
  {
    name: 'Real Estate Prediction Model',
    description: 'A scalable housing data system designed for robust EDA, efficient feature engineering, and accurate price modeling.',
    link: 'https://github.com/jayson-s/RealEstatePrediction',
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Apple',
    title: 'Support Engineer',
    start: 'Aug 2021',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'IBM',
    title: 'Cloud Developer',
    start: 'Sep 2019',
    end: 'Dec 2019',
    id: 'work2',
  },
  {
    company: 'IBM',
    title: 'AI Developer',
    start: 'May 2019',
    end: 'Aug 2019',
    id: 'work3',
  },
  {
    company: 'Shoppers Drug Mart',
    title: 'Assistant Store Manager',
    start: 'Jul 2017',
    end: 'Aug 2022',
    id: 'work4',
  },
  {
    company: 'Canada Post',
    title: 'Administrative Manager',
    start: 'Jul 2017',
    end: 'Aug 2021',
    id: 'work5',
  },
]

export const EDUCATION_: Education[] = [
  {
    institution: 'University of Ontario Institute of Technology',
    degree: 'Bachelor of Science (Honours) - Computer Science',
    grad: '2024',
    id: 'edu1',
  },
]

export const CERTIFICATE: Certification[] = [
  {
    company: 'Amazon Web Services',
    name: 'AWS Cloud Solutions Architect - Associate',
    date: 'Feb 2025',
    id: 'cert1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jayson-s',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/jayson-sandhu',
  },
]

type Email = `${string}@${string}.${string}`;

export const EMAIL: Email = 'jayson@jaysonsandhu.com';
