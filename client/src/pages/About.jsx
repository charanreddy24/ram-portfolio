import React, { forwardRef } from 'react';
import TimelineComponent from '../components/Timeline.jsx';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="h-max overflow-auto flex flex-col items-center justify-center border-b-2 border-blue-400">
        <h1 className="text-3xl mt-2">About</h1>
        <span className="mt-2 mb-2 text-center ml-8 mr-8">
          My journey in the tech world began over 5 years ago after completion
          of my graduation, and since then, I have developed a diverse skill set
          that allows me to handle various aspects of web development and system
          administration.
        </span>
        <div className="ml-4 mr-4 mt-2 text-white">
          <TimelineComponent />
        </div>
      </div>
    </div>
  );
});

export default About;
