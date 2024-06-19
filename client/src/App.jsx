import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import { ScrollProvider, useScroll } from './ScrollContext.jsx';

const App = () => {
  return (
    <ScrollProvider>
      <BrowserRouter>
        <Menu />
        <MainContent />
        <FooterComponent />
      </BrowserRouter>
    </ScrollProvider>
  );
};

const MainContent = () => {
  const { homeRef, aboutRef, resumeRef, contactRef } = useScroll();

  return (
    <>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Resume ref={resumeRef} />
      <Contact ref={contactRef} />
    </>
  );
};

export default App;
