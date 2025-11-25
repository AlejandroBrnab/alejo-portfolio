import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import HeroSection from './components/HeroSection';
// import { Container, Title, Text, Flex } from '@mantine/core';

const App: React.FC = () => (
  <div>
    <Header />

    <HeroSection />

    <ProjectsSection />

    {/* Contact Section */}
    {/* <Container id="contact" py="xl" style={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <Title order={2} mb="md">Contact</Title>
      <Text>Email: your.email@example.com</Text>
      <Text mt="sm">Feel free to reach out!</Text>
    </Container> */}

    <Footer />
  </div>
);

export default App;
