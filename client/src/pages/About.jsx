import React, { forwardRef } from 'react';
import TimelineComponent from '../components/Timeline.jsx';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="h-max overflow-auto flex flex-col items-center justify-center border-b-2 border-blue-400">
        <h1 className="text-3xl mt-2">About</h1>
        <span className="mt-2 mb-2 text-center ml-8 mr-8">
          With over 6 years of experience in full stack development and cloud
          infrastructure, I specialize in building scalable web applications
          using React, Java, SpringBoot, NestJS, Node.js, and PostgreSQL &
          MongoDB. I’ve led cross-functional teams, streamlined CI/CD processes,
          and developed secure, high-performance systems across various
          industries. My focus is on delivering innovative, reliable, and
          efficient solutions in the tech space.
        </span>
        <div className="ml-4 mr-4 mt-2 text-white">
          <TimelineComponent />
        </div>
      </div>
    </div>
  );
});

export default About;
