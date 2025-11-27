import React from 'react';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import classes from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className={classes.wrapper} id="home">
      <Container size={700} className={classes.inner}>
        <Title className={classes.title}>
          Hello, I'm{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'teal.7', to: 'teal.9' }} // darker green gradient
            inherit
          >
            Alejandro Rodriguez
          </Text>
        </Title>

        <Text className={classes.description} c="dimmed" size="lg">
          Frontend Developer | React + TypeScript | Portfolio
        </Text>

        <Group className={classes.controls} mt="xl">
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'teal.7', to: 'teal.9' }} // darker gradient for button
            component="a"
            href="#projects"
          >
            View Projects
          </Button>

          <Button
            component="a"
            href="https://github.com/your-github-username"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconBrandGithub size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default HeroSection;
