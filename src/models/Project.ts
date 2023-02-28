import Link from './Link';

interface Project {
  label: string,
  description: string,
  tags: string[],
  links: Link[],
  images: string[]
}

export default Project;
