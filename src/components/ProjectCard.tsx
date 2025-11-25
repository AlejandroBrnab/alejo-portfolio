import React from 'react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Group,
  Image,
  Text,
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import classes from './ProjectCard.module.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
  likes?: number;
}
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card withBorder padding="lg" radius="md" className={classes.card}>
    {/* IMAGE */}
    <Card.Section mb="sm">
      <Image
        src={project.image}
        alt={project.title}
        height={180}
      />
    </Card.Section>

    {/* FIRST TAG */}
    {project.tech && project.tech.length > 0 && (
      <Badge variant="light">{project.tech[0]}</Badge>
    )}

    {/* TITLE */}
    <Text className={classes.title} mt="sm">
      {project.title}
    </Text>

    {/* DESCRIPTION */}
    <Text size="sm" mt="xs" c="dimmed">
      {project.description}
    </Text>

    {/* AUTHOR */}
    <Group mt="lg">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
        radius="sm"
      />
      <div>
        <Text fw={500}>Alejandro Rodriguez</Text>
        <Text fz="xs" c="dimmed">
          Portfolio Project
        </Text>
      </div>
    </Group>

    {/* FOOTER */}
    <Card.Section className={classes.footer} mt="md">
      <Group justify="space-between">
        <Text fz="xs" c="dimmed">
          {project.likes ?? 0} people liked this
        </Text>

        <Group gap={0}>
          <ActionIcon variant="subtle" color="gray">
            <IconHeart size={20} color="var(--mantine-color-red-6)" stroke={1.5} />
          </ActionIcon>

          <ActionIcon variant="subtle" color="gray">
            <IconBookmark size={20} color="var(--mantine-color-yellow-6)" stroke={1.5} />
          </ActionIcon>

          {/* SHARE BUTTON GOES TO PROJECT LINK */}
          <ActionIcon
            variant="subtle"
            color="gray"
            component="a"
            href={project.link}
            target="_blank"
          >
            <IconShare size={20} color="var(--mantine-color-blue-6)" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </Card.Section>
  </Card>
);

export default ProjectCard;
