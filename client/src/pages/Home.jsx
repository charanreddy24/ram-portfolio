import React from 'react';
import myPicture from '/src/assets/SD.jpeg';

const Home = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      <div className="md:h-screen h-5/6 md:w-4/5 flex items-center bg-[#97bdf7]">
        <div className="text-center md:text-left text-3xl md:text-7xl p-8 font-serif text-white">
          <div className="text-xl">I'm a</div>
          Full Stack Software Developer
          {/* <hr className="mt-10 mx-auto md:mx-10 w-1/2" /> */}
          <div className="text-xl mt-4 md:text-pretty">
            with over 4 years of experience in building and maintaining web
            applications using the <br />
            MERN stack (MongoDB, Express.js, React.js, Node.js). <br />
            Explore my work and get to know more about my skills and projects.
          </div>
        </div>
      </div>
      <div className="md:h-screen h-2/6 md:w-1/5 flex items-center bg-[#b3f68e]">
        <div className="text-center md:text-left text-3xl md:text-5xl p-8 font-serif text-white">
          <hr className="mt-10 mx-auto md:mx-10 w-1/2" />
        </div>
      </div>
      <div className="absolute top-2/3 left-1/2 md:top-1/2 md:left-3/4 ml-10 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <img
            src={myPicture}
            alt="My Picture"
            className="shadow-lg shadow-white border-8 size-2/3 md:w-64 md:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
