import React from 'react';
import { Container, Title, Center, SimpleGrid } from '@mantine/core';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
  likes?: number;
}

const projects: Project[] = projectsData as Project[];

const ProjectsSection: React.FC = () => (
  <Container id="projects" py="xl">
    <Center>
      <Title mb={32}>Projects</Title>
    </Center>

    <SimpleGrid
      cols={3}
      spacing={24}
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </SimpleGrid>
  </Container>
);

export default ProjectsSection;
