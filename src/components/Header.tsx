import React, { useState } from 'react';
import { Burger, Container, Group, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Header.module.css';

const links = [
  { link: '#home', label: 'Home' },
  { link: '#projects', label: 'Projects' },
];

const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const isDesktop = useMediaQuery('(min-width: 768px)'); // true if screen >= 768px

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        if (!isDesktop) toggle(); // close menu on mobile
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        {/* Left side: portfolio name */}
        <Anchor href="#home" className={classes.logo}>
          Alejandro Rodriguez
        </Anchor>

        {/* Desktop links */}
        {isDesktop && <Group gap="md">{items}</Group>}

        {/* Mobile burger */}
        {!isDesktop && <Burger opened={opened} onClick={toggle} size="sm" />}
      </Container>

      {/* Mobile dropdown */}
      {!isDesktop && opened && (
        <div className={classes.dropdown}>
          {items}
        </div>
      )}
    </header>
  );
};

export default Header;
