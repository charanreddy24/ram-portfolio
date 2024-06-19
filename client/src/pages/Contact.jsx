import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>Contact</div>;
    </div>
  );
});

export default Contact;
