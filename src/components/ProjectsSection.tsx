import { Container, Title, SimpleGrid, Center } from "@mantine/core";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

const projects = projectsData;

const categories = Array.from(new Set(projects.map(p => p.category || "Uncategorized")));

export function ProjectsSection() {
  return (
    <Container size="lg" id="projects">
      <Center>
        <Title mb={32}>Projects</Title>
      </Center>
      {categories.map((category) => {
        const filtered = projects.filter((p) => p.category === category);

        return (
          <div key={category} style={{ marginBottom: "3rem" }}>
            <Title order={2} mb="md">{category}</Title>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </SimpleGrid>
          </div>
        );
      })}
    </Container>
  );
}
