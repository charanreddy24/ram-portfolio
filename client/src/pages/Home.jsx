import React, { forwardRef, useState, useEffect } from 'react';
import myPicture from '/src/assets/Ram_fullPic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNodeJs,
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faAws,
  faDocker,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faNetworkWired,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  { icon: faNodeJs, color: '#68A063' },
  { icon: faReact, color: '#61DAFB' },
  { icon: faJs, color: '#F7DF1E' },
  { icon: faHtml5, color: '#E34F26' },
  { icon: faCss3Alt, color: '#1572B6' },
  { icon: faAws, color: '#FF9900' },
  { icon: faDocker, color: '#2496ED' },
  { icon: faLinux, color: '#E34F26' },
  { icon: faDatabase, color: '#4DB33D' },
  { icon: faNetworkWired, color: '#0071C5' },
  { icon: faCloud, color: '#00BFFF' },
];

const getRandomPositions = () => {
  return icons.map(() => {
    const top = Math.random() * 80 + 0;
    const left = Math.random() * 80 + 10;
    return { top: `${top}%`, left: `${left}%` };
  });
};

const Home = forwardRef((props, ref) => {
  const [positions, setPositions] = useState(getRandomPositions());

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(getRandomPositions());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref}>
      <div className="relative flex flex-col md:flex-row h-screen border-b-2 border-blue-600">
        <div className="md:h-screen h-5/6 md:w-4/5 flex items-center bg-[#4f8df1]">
          <div className="text-center md:text-left text-5xl md:text-7xl p-8 font-serif text-white">
            <div className="text-2xl md:text-pretty md:text-3xl lg:text-xl">
              I'm a
            </div>
            Full Stack Software Developer
            <div className="text-2xl mt-4 md:text-pretty md:text-3xl lg:text-xl">
              with over 4 years of experience in building and maintaining web
              applications using the <br />
              MERN stack (MongoDB, Express.js, React.js, Node.js). <br />
              Explore my work and get to know more about my skills and projects.
            </div>
          </div>
        </div>
        <div className="md:h-full h-1/5 md:w-1/5 flex items-center bg-[#5df55d] relative overflow-hidden">
          {icons.map((iconObj, index) => (
            <FontAwesomeIcon
              key={index}
              icon={iconObj.icon}
              className="text-4xl absolute"
              style={{
                top: positions[index].top,
                left: positions[index].left,
                color: iconObj.color,
              }}
            />
          ))}
        </div>
        <div className="hidden lg:block absolute top-2/3 left-1/2 mt-6 md:top-1/3 md:mt-28 md:left-3/4 lg:top-1/3 lg:left-3/4 lg:ml-14 lg:mt-40 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <img
              src={myPicture}
              alt="My Picture"
              className="shadow-lg shadow-white border-8 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
