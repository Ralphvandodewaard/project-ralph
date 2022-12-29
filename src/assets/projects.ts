import Project from '@/models/Project';

const projects: Project[] = [
  {
    label: 'Chronobreak',
    description: 'Chronobreak (2018) is a challenging 2D platformer game where you can manipulate time to make your way through various enemies and puzzles.',
    tags: [],
    links: []
  },
  {
    label: 'Sub',
    description: 'Sub (2018) is a 3D platformer game with a meaningful story, where a mysterious light from above will guide you through the darkness.',
    tags: [],
    links: []
  },
  {
    label: 'Fuji Feet',
    description: 'Fuji Feet (2018) is a chaotic arcade game where you compete against other players and try to avoid the flowing lava by standing on the correct tiles.',
    tags: [],
    links: []
  },
  {
    label: 'VR Detective Training',
    description: 'VR Detective Training (2020) is a virtual reality concept game built in collaboration with the Politie Amsterdam, with the goal of giving police detectives the opportunity to virtually practice working at crime scenes.',
    tags: [],
    links: []
  },
  {
    label: 'Boten',
    description: 'Boten (2021) is a simple card game where you have to guess what kind of playing card you are going to draw next.',
    tags: [],
    links: []
  },
  {
    label: 'League-abilities',
    description: 'League-abilities (2021) is a browser game where you have to guess which League of Legends champion a certain ability belongs to.',
    tags: [],
    links: [
      { label: 'Visit', url: 'https://projectralph.com/league-trivia' }
    ]
  },
  {
    label: 'Urfbuilds',
    description: 'Urfbuilds (2021) is a website where you can discover and submit champion builds for the League of Legends game mode URF.',
    tags: [],
    links: [
      { label: 'Visit', url: 'https://urfbuilds.com' }
    ]
  },
  {
    label: 'League-quotes',
    description: 'League-quotes (2022) is a browser game where you have to guess as many times in a row as possible by which League of Legends champion a certain quote is said.',
    tags: [],
    links: [
      { label: 'Visit', url: 'https://projectralph.com/league-quotes' }
    ]
  },
  {
    label: 'League-ranked',
    description: 'League-ranked (2022) is a personal website where we track the match history and various stats of our ranked team in League of Legends.',
    tags: [],
    links: [
      { label: 'Visit', url: 'https://projectralph.com/league-ranked' }
    ]
  },
  {
    label: 'Pokemon-binder',
    description: 'Pokemon-binder (2022) is a website where you can view and filter Pokemon TCG card sets and track your card collections in various binder sizes.',
    tags: ['Angular 13', 'Tailwind CSS', 'Pokemon TCG API'],
    links: [
      { label: 'Visit', url: 'https://projectralph.com/pokemon-binder' }
    ]
  }
];

export default projects;
