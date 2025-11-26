import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ProjectsSection } from './components/ProjectsSection';
import HeroSection from './components/HeroSection';

const App: React.FC = () => (
  <div>
    <Header />

    <HeroSection />

    <ProjectsSection />

    <Footer />
  </div>
);

export default App;
