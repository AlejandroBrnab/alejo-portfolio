import React, { useState } from 'react';
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  Modal,
} from '@mantine/core';
import { IconBrandGithub, IconBrandYoutube } from '@tabler/icons-react';
import classes from './ProjectCard.module.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  youtube?: string; 
  details?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Card withBorder radius="md" p="md" className={classes.card}>
        
        {/* IMAGE */}
        <Card.Section>
          <Image src={project.image} alt={project.title} height={180} />
        </Card.Section>

        {/* TITLE + DESCRIPTION */}
        <Card.Section className={classes.section} mt="md">
          <Group justify="space-between">
            <Text fz="lg" fw={500}>
              {project.title}
            </Text>
          </Group>

          <Text fz="sm" mt="xs" c="dimmed">
            {project.description}
          </Text>
        </Card.Section>

        {/* TECH TAGS */}
        <Card.Section className={classes.section}>
          <Text mt="md" fz="sm" c="dimmed" fw={500}>
            Technologies used
          </Text>

          <Group gap={7} mt={5}>
            {project.tech.map((t) => (
              <Badge key={t} variant="light" color="teal">
                {t}
              </Badge>
            ))}
          </Group>
        </Card.Section>

        {/* FOOTER BUTTONS */}
        <Group mt="xs">
          {/* View More Details */}
          <Button
            radius="md"
            style={{ flex: 1 }}
            onClick={() => setOpened(true)}
            color="teal"
          >
            View More Details
          </Button>

          {/* GitHub */}
          <ActionIcon variant="default" radius="md" size={36} component="a" href={project.github} target="_blank" >
            <IconBrandGithub stroke={1.5} />
          </ActionIcon>

          {/* YouTube */}
          <ActionIcon
          variant="default"
          radius="md"
          size={36}
          component="a"
          href={project.youtube}
          target="_blank" >
          <IconBrandYoutube stroke={1.5} />
        </ActionIcon>
        </Group>
      </Card>

      {/* MODAL FOR DETAILS */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={project.title}
        size="lg"
      >
        <Text>{project.details || 'No additional details provided.'}</Text>
      </Modal>
    </>
  );
};

export default ProjectCard;
