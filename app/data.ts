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

type SocialLink = {
  label: string
  link: string
}

type SkillCategory = {
  category: string
  skills: string[]
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Java', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'Swift']
  },
  {
    category: 'General',
    skills: [
      'Adaptability',
      'Analytical',
      'Collaboration',
      'Communication',
      'Critical Thinking',
      'Innovation',
      'Leadership',
      'Problem Solving',
      'Teamwork',
      'Time Management',
    ],
  },
  {
    category: 'Technical',
    skills: [
      'Algorithms',
      'Artificial Intelligence',
      'Cloud Computing',
      'Data Structures',
      'Debugging',
      'Flutter',
      'Git',
      'Machine Learning',
      'Mobile Development',
      'Software Development',
      'Technical Support',
      'Troubleshooting',
      'Version Control',
      'Web Development',
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
    name: 'Banking System',
    description: 'A scalable C++ banking system designed for secure account management, transactions, and financial data integrity.',
    link: 'https://github.com/jayson-s/Banking-System',
    id: 'project3',
  },
  {
    name: 'LifeBalance+',
    description: 'A cross-platform wellness app built with Flutter, offering task management, habit tracking, and fitness analytics.',
    link: 'https://github.com/jayson-s/LifeBalancePlus',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Apple',
    title: 'Technical Expert',
    start: 'Aug 2021',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'IBM',
    title: 'Software Developer',
    start: 'May 2019',
    end: 'Dec 2019',
    id: 'work2',
  },
  {
    company: 'Shoppers Drug Mart',
    title: 'Assistant Store Manager',
    start: '2017',
    end: '2022',
    id: 'work3',
  },
  {
    company: 'Canada Post',
    title: 'Administrative Manager',
    start: '2017',
    end: '2021',
    id: 'work4',
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

export const EMAIL: Email = 'jayson.sandhu@yahoo.com';