import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const resumeRef = useRef();
  const contactRef = useRef();

  const getOffset = () => {
    if (window.innerWidth < 768) {
      return -270;
    } else {
      // Large screens
      return -1;
    }
  };
  const scrollTo = (section) => {
    let offset = getOffset();

    if (section === 'home' && homeRef.current) {
      const top =
        homeRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    if (section === 'about' && aboutRef.current) {
      const top =
        aboutRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    if (section === 'resume' && resumeRef.current) {
      const top =
        resumeRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    if (section === 'contact' && contactRef.current) {
      const top =
        contactRef.current.getBoundingClientRect().top +
        window.scrollY +
        offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ homeRef, aboutRef, resumeRef, contactRef, scrollTo }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
