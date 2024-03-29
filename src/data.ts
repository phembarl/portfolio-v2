interface Experience {
  company: string;
  url?: string;
  role: string;
  location: string;
  type?: string;
  datePeriod: string;
  description: string;
  tech: string[];
}

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
  skills: string[];
}

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
  year: string;
}

export const experience: Experience[] = [
  {
    company: 'Andela',
    role: 'Senior Frontend Engineer',
    location: 'Lagos, Nigeria',
    type: '',
    datePeriod: 'NOVEMBER 2021 - PRESENT',
    description:
      'Lead the development of responsive and performant user interfaces for complex web applications within a geographically dispersed, cross-functional team.',
    tech: ['react', 'next.js'],
    url: 'https://andela.com',
  },
  {
    company: 'MassChallenge',
    role: 'Frontend Engineer',
    location: 'Boston, Massachusetts',
    type: '',
    datePeriod: 'FEBRUARY 2022 - MARCH 2023',
    description:
      'Led the Frontend team in building and maintaining the Accelerate platform, enabling a global community of startups, mentors, judges, speakers, advisors, and sponsors.',
    tech: ['react', 'next.js'],
    url: 'https://masschallenge.org',
  },
  {
    company: 'Prospa (YC W21)',
    role: 'Frontend Engineer',
    location: 'Lagos, Nigeria',
    type: '',
    datePeriod: 'JUNE 2021 - AUGUST 2022',
    description:
      "Led a high-performing front-end team in building the Prospa application, an innovative solution that streamlines entrepreneurs' banking and business operations.",
    tech: ['react', 'next.js'],
    url: 'https://getprospa.com',
  },
  {
    company: 'Bookings Africa',
    role: 'Software Engineer',
    location: 'Lagos, Nigeria',
    type: 'Contract',
    datePeriod: 'MARCH 2021 - JUNE 2021',
    description:
      'Work closely with a distributed software engineering team as well as the UI/UX team to design, develop, and deploy the Bookings Africa LMS platform, a learning management system that helps develop and improve users’ digital skills.',
    tech: ['react', 'next.js'],
    url: 'https://www.bookingsafrica.com',
  },
];

export const skills: string[] = [
  'React',
  'Redux',
  'Next.js',
  'Vue.js',
  'Pinia',
  'HTML',
  'CSS',
  'SASS',
  'Tailwind',
  'Bootstrap',
  'Responsive Design',
  'JavaScript',
  'TypeScript',
  'jQuery',
  'Docker',
  'Git',
  'REST API',
  'GraphQL',
  'Apollo',
  'Jest',
  'Enzyme',
  'AWS',
  'Jira',
  'PostgreSQL',
  'MongoDB',
];

export const projects: Project[] = [
  {
    title: 'Prospa',
    description:
      'This forward-thinking platform goes beyond traditional financial services, offering a streamlined and efficient approach to managing both banking and essential business operations.',
    url: 'https://getprospa.com',
    imageUrl: '/prospa.png',
    skills: ['Next.js', 'React', 'JavaScript', 'BootStrap', 'AWS'],
  },
  {
    title: 'Accelerate',
    description:
      "Accelerate is a platform encompassing the world's largest community of startups, experts (mentors, judges, speakers, and advisors), and sponsors within an active ecosystem of global equity-free, high-impact accelerator programs.",
    url: 'https://accelerate.masschallenge.org/',
    imageUrl: '/mc.png',
    skills: ['React', 'JavaScript', 'jQuery', 'AWS'],
  },
  {
    title: 'Edusko',
    description:
      'Edusko takes the hassle out of navigating educational choices, ensuring a streamlined and accessible process for parents seeking the best educational opportunities for their children.',
    url: 'https://www.edusko.com/',
    imageUrl: '/edusko.png',
    skills: ['React', 'Node', 'Styled Components', 'AWS'],
  },
  {
    title: 'Ramos',
    description:
      'Inspired by a popular design on dribble.com, dive into your data with style and ease, as every click and scroll reveals a visual treat, making analysis both informative and enjoyable. Designed primarily for desktop.',
    url: 'https://ramos-mp.vercel.app/',
    imageUrl: '/ramos.png',
    skills: ['Next.js', 'Tailwind', 'Animation', 'Vercel'],
  },
];

export const articles: Article[] = [
  {
    title: 'My ESLint Adventure',
    description:
      'Some time back, I received an invitation to join Andela’s Bootcamp, which left me both thrilled and a bit anxious about what to expect...',
    url: 'https://medium.com/@phembarl/my-eslint-adventure-bb312373d875/',
    imageUrl: '/eslint.png',
    year: '2019',
  },
];

export const keywords = [
  'Femi Balogun',
  'Femi',
  'Balogun',
  'phembarl',
  'Software engineer',
  'Frontend',
  'Frontend engineer',
  'Frontend developer',
  'React',
  'React developer',
  'React.js',
  'Reactjs',
  'Next',
  'Next.js developer',
  'Next.js',
  'Nextjs',
  'Vue',
  'Vue developer',
  'Angular developer',
];
