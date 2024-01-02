// Home.js
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import About from '../components/About';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import { useRef } from 'react';

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <NavBar
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}  // Pass scrollToContact to NavBar
      />
      <MainContent onScrollToAbout={scrollToAbout} />
      <About ref={aboutRef} />
      <Achievements />
      <Projects ref={projectsRef} />
      <div ref={contactRef}>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
