import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>About</div>;
    </div>
  );
});

export default About;
