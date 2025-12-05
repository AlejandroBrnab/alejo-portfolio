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
  videoId?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Card withBorder radius="md" p="md" className={classes.card}>
        
        {/* IMAGE + VIDEO */}
        <Card.Section className={classes.mediaSection}>
            <div className={classes.mediaWrapper}>
              {project.videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={project.title}
                  className={classes.media}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <Image
                  src={`/alejo-portfolio/${project.image}`}
                  alt={project.title}
                  className={classes.media}
                />
              )}
          </div>
        </Card.Section>

        {/* TITLE + DESCRIPTION */}
        <Card.Section
          className={`${classes.section} ${classes.descriptionSection}`}
          mt="md"
        >
          <Group justify="space-between">
            <Text fz="lg" fw={500}>
              {project.title}
            </Text>
          </Group>

          <Text
            fz="sm"
            mt="xs"
            c="dimmed"
            className={classes.description}
          >
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
          {project.github && (
            <ActionIcon
              variant="default"
              radius="md"
              size={36}
              component="a"
              href={project.github}
              target="_blank"
            >
              <IconBrandGithub stroke={1.5} />
            </ActionIcon>
          )}

          {/* YouTube */}
          {project.youtube && (
            <ActionIcon
              variant="default"
              radius="md"
              size={36}
              component="a"
              href={project.youtube}
              target="_blank"
            >
              <IconBrandYoutube stroke={1.5} />
            </ActionIcon>
          )}
        </Group>
      </Card>

      {/* MODAL FOR DETAILS */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={project.title}
        size="lg"
      >
        <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {project.details ? (
            <>
              <Text fw={600} mb="xs">Process & Intention</Text>
              <Text style={{ whiteSpace: 'pre-wrap' }}>{project.details}</Text>
            </>
          ) : (
            <Text>No additional details provided.</Text>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;