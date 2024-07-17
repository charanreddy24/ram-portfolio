import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { FaCalendarAlt } from 'react-icons/fa';

export default function TimelineComponent() {
  return (
    <Timeline className="p-4 mb-4 mx-auto bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd rounded-lg">
      {/* Algoma */}
      <Timeline.Item>
        <Timeline.Point icon={FaCalendarAlt} />
        <Timeline.Content>
          <Timeline.Time className="text-slate-700 font-bold">
            Jan 2023 - Jul 2024
          </Timeline.Time>
          <Timeline.Title className="text-slate-700 ">
            Algoma University
          </Timeline.Title>
          <Timeline.Body className="text-white ">
            Graduate Certificate in Project Management
          </Timeline.Body>

          <Timeline.Title className="text-slate-700 ">
            Projects done in 2023 - 2024
          </Timeline.Title>
          <Timeline.Body>
            <ul className="list-disc list-inside text-white ml-4">
              <li className="mb-2">
                <a
                  href="https://github.com/charanreddy24/condo-pulse-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer underline text-green-900 hover:text-teal-400"
                >
                  Real-Time Chat Application & Security Operations Software:
                  <br />
                </a>
                <span className="text-sm">
                  Developed a comprehensive solution for a Security Company
                  using the MERN stack, enhancing communication and security
                  operations for condominiums.
                </span>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/sm86/destake/tree/main/react-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer underline text-green-900 hover:text-teal-400"
                >
                  Blockchain Decentralization Visualization: <br />
                </a>
                <span className="text-sm">
                  Led the development of a web application focused on blockchain
                  research in collaboration with a University of Toronto Ph.D.
                  student,
                  <br /> showcasing my ability to translate complex research
                  into user-friendly interfaces.
                </span>
              </li>
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      {/* TCS experience */}
      <Timeline.Item>
        <Timeline.Point icon={FaCalendarAlt} />
        <Timeline.Content>
          <Timeline.Time className="text-slate-700 font-bold">
            Jan 2021 - Dec 2022
          </Timeline.Time>
          <Timeline.Title className="text-slate-700 ">
            Tata Consultancy Services (TCS)
          </Timeline.Title>
          <Timeline.Body className="text-white ">
            As a Full Stack Software Developer at TCS, I worked on various
            projects, including developing network management systems for
            Ericsson. <br />
            My role involved full-stack development, system administration, and
            cloud infrastructure management.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      {/* Yash company experience */}
      <Timeline.Item>
        <Timeline.Point icon={FaCalendarAlt} />
        <Timeline.Content>
          <Timeline.Time className="text-slate-700 font-bold">
            Jun 2018 - Dec 2020
          </Timeline.Time>
          <Timeline.Title className="text-slate-700 ">
            Yash Technologies
          </Timeline.Title>
          <Timeline.Body className="text-white ">
            At Yash Technologies, I enhanced my expertise in Linux system
            administration, cloud infrastructure management, <br /> CI/CD
            automation, and DevOps practices.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      {/* B.Tech */}
      <Timeline.Item>
        <Timeline.Point icon={FaCalendarAlt} />
        <Timeline.Content>
          <Timeline.Time className="text-slate-700 font-bold">
            Jun 2014 - Apr 2018
          </Timeline.Time>
          <Timeline.Title className="text-slate-700 ">
            Jawaharlal Nehru Technological University, Kakinada
          </Timeline.Title>
          <Timeline.Body className="text-white ">
            Bachelor of Technology in Electronics & Communication Engineering
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
