import {
  frontend,
  backend,
  ux,
  javascript,
  html,
  css,
  reactjs,
  git,
  figma,
  docker,
  TecBlog,
  AnaBella,
  MusicaSpotify,
  JogodaVelha,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mim',
  },
  {
    id: 'projects',
    title: 'Projetos',
  },
  {
    id: 'contact',
    title: 'Contato',
  },
];

const services = [
  {
    title: 'Desenvolvedor Frontend',
    icon: frontend,
  },
  {
    title: 'Desenvolvedor BackEnd',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];



const projects = [
  {
    id: 'projeto1',
    name: 'TecBlog',
    description: 'Este projeto é um site de notícias de tecnologia, com foco em um design moderno, leve e acessível.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: TecBlog,
    repo: 'https://github.com/danielsoares30/tecblog',
    demo: 'https://danielsoares30.github.io/tecblog/',
  },
  {
    id: 'projeto2',
    name: 'Ana Bella',
    description:
      'Página de apresentação simples para a modelo fictícia Ana Bella, com seções para biografia, campanhas e contato',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: AnaBella,
    repo: 'https://github.com/danielsoares30/Projeto-AnaBella',
    demo: 'https://danielsoares30.github.io/Projeto-AnaBella/',
  },
  {
    id: 'projeto3',
    name: 'Musica Spotify',
    description: 'Este projeto é uma recriação visual da página de lançamento de álbuns do site Monstercat, especificamente inspirada na página do álbum "LEVEL DAYS" do artista Conro',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: MusicaSpotify,
    repo: 'https://github.com/danielsoares30/MusicaSpotify',
    demo: 'https://danielsoares30.github.io/MusicaSpotify/',
  },
  {
    id: 'projeto4',
    name: 'Jogo da Velha',
    description: `Este é um projeto simples de Jogo da Velha (Tic-Tac-Toe) criado com React.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: JogodaVelha,
    repo: 'https://github.com/danielsoares30/jogoDaVelhaReact',
    demo: 'https://danielsoares30.github.io/jogoDaVelhaReact/',
  },
];

export { services, technologies, projects };
