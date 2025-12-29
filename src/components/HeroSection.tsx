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
            Alejandro Bernabé Rodríguez
          </Text>
        </Title>

        <Text className={classes.description} c="dimmed" size="lg">
          I graduated from the Computer Science and Technology program at Champlain College Saint-Lambert.<br/><br/>
          Most of my technical skills come from a programming background, where I learned how to work with front-end, back-end, and databases together.<br />
          While I can build full-stack applications, I always enjoyed working more on the front-end and the user experience than on the back-end or database side.<br /><br />
          At some point, I started feeling drawn towards something more artistic. One day, while looking for a tech job, I came across a Blender video. I followed a tutorial and immediately loved it. Since then, I’ve been learning and building new skills in 3D, which is a completely new area for me.<br/>
        </Text>

        <Group className={classes.controls} mt="xl" justify="center" gap={25}>
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
            href="https://github.com/AlejandroBrnab"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconBrandGithub size={20} />}
            target="_blank"
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default HeroSection;
