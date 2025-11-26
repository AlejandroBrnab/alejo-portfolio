import React from 'react';
import { Container, Text, Group, ActionIcon } from '@mantine/core';
import { IconBrandYoutube, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './Footer.module.css';

const Footer: React.FC = () => (
  <div className={classes.footer}>
    <Container className={classes.inner}>
      {/* Left side: portfolio name or logo */}
      <Text fw={700} fz="lg">
        Alejandro Rodriguez
      </Text>

      {/* Right side: social icons */}
      <Group gap="sm" className={classes.links} justify="flex-end" align="center" wrap="nowrap">
        <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://youtube.com" target="_blank">
          <IconBrandYoutube size={20} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle" component="a" href="https://linkedin.com" target="_blank">
          <IconBrandLinkedin size={20} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>

    {/* Bottom copyright */}
    <Container className={classes.bottom}>
      <Text fz="sm" c="dimmed" ta="center">
        &copy; {new Date().getFullYear()} Alejandro Rodriguez. All rights reserved.
      </Text>
    </Container>
  </div>
);

export default Footer;
