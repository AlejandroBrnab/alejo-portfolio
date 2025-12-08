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
          Mostly of my technical skills come from a programming background. Teaching me how to properly make connections between front-end, backend and a database.<br />
          While I know how to develop a full-stack application, I always found myself to like and work more the front-end  side and user interaction of the application, rather than the backend and database side.<br /><br />
          I kind of felt interested into a more artistic area instead. One day, while looking for a tech job, I found myself to check a video about Blender. I followed a tutorial and absolutely loved it. I’ve been learning and developing new skills in the 3D field, which is new to me.<br/>
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
