export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
  likes?: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my projects and skills.',
    image: '/assets/project1.png',
    link: '#',
    tech: ['Vue', 'TypeScript', 'Mantine'],
    likes: 120,
  },
  {
    id: '2',
    title: 'Game Prototype',
    description: 'A small 2D game built in Godot as a design experiment.',
    image: '/assets/project2.png',
    link: '#',
    tech: ['Godot', 'GDScript'],
    likes: 75,
  },
  {
    id: '3',
    title: 'Cybersecurity Lab Setup',
    description: 'A virtualized homelab for studying networking and security.',
    image: '/assets/project3.png',
    link: '#',
    tech: ['VMware', 'Windows Server', 'Linux'],
    likes: 52,
  },
  {
    id: '4',
    title: 'Memory Scanner (WPF)',
    description: 'A Cheat Engine–like memory scanner with pointer scanning.',
    image: '/assets/project4.png',
    link: '#',
    tech: ['C#', 'WPF', '.NET'],
    likes: 99,
  },
  {
    id: '5',
    title: 'Blog Platform UI',
    description: 'A UI mockup for a modern blog layout using Mantine.',
    image: '/assets/project5.png',
    link: '#',
    tech: ['React', 'Mantine'],
    likes: 40,
  },
  {
    id: '6',
    title: 'Networking Automation Scripts',
    description: 'A set of Bash and PowerShell scripts for automating tasks.',
    image: '/assets/project6.png',
    link: '#',
    tech: ['PowerShell', 'Bash'],
    likes: 64,
  },
  {
    id: '7',
    title: 'E-commerce Product UI',
    description: 'A responsive product card + cart UI concept.',
    image: '/assets/project7.png',
    link: '#',
    tech: ['React', 'Tailwind'],
    likes: 33,
  },
  {
    id: '8',
    title: 'Godot Puzzle Prototype',
    description: 'Puzzle mechanics for my visual novel + puzzle hybrid game.',
    image: '/assets/project8.png',
    link: '#',
    tech: ['Godot', 'GDScript'],
    likes: 21,
  },
  {
    id: '9',
    title: 'AI Chat Interface',
    description: 'A minimal chat UI inspired by ChatGPT.',
    image: '/assets/project9.png',
    link: '#',
    tech: ['Vue', 'TypeScript'],
    likes: 58,
  },
  {
    id: '10',
    title: 'System Monitoring Dashboard',
    description: 'A simple dashboard that displays system metrics.',
    image: '/assets/project10.png',
    link: '#',
    tech: ['React', 'Node.js'],
    likes: 46,
  },
];
