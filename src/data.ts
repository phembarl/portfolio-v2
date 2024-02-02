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
