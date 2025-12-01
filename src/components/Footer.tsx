import React from 'react';
import { Container, Text, Group, ActionIcon } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import classes from './Footer.module.css';

const Footer: React.FC = () => (
  <div className={classes.footer}>
    <Container className={classes.inner}>

      {/* copyright */}
      <Text fz="sm" c="dimmed" ta="center">
        &copy; {new Date().getFullYear()} Alejandro Bernabé Rodríguez.
      </Text>

      {/* Right side: social icons */}
      <Group gap="sm" className={classes.links} justify="flex-end" align="center" wrap="nowrap">
        <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://github.com/AlejandroBrnab" target="_blank">
          <IconBrandGithub size={20} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://linkedin.com" target="_blank">
          <IconBrandLinkedin size={20} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>
  </div>
);

export default Footer;
