import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { FaCalendarAlt } from 'react-icons/fa';

export default function TimelineComponent() {
  return (
    <Timeline className="p-4 mb-4 mx-auto bg-[#F5E663] rounded-lg">
      {/* Shift AI experience */}
      <Timeline.Item>
        <Timeline.Point icon={FaCalendarAlt} />
        <Timeline.Content>
          <Timeline.Time className="text-teal-700 font-bold">
            Sep 2024 - Present
          </Timeline.Time>
          <Timeline.Title className="text-black ">Shift AI</Timeline.Title>
          <Timeline.Body>
            <ul className="list-disc list-inside text-black ml-4">
              <li>
                Developing a fleet management and telematics application using
                NestJS, React, and PostgreSQL.
              </li>
              <li>
                Leading architecture design, real-time data processing using
                MQTT, and implementing live communication with web sockets.
              </li>
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      {/* House Stack Realty experience */}
      <Timeline.Item>
        <Timeline.Point icon={FaCalendarAlt} />
        <Timeline.Content>
          <Timeline.Time className="text-teal-700 font-bold">
            Jul 2024 - Present
          </Timeline.Time>
          <Timeline.Title className="text-black ">
            House Stack Realty
          </Timeline.Title>
          <Timeline.Body>
            <ul className="list-disc list-inside text-black ml-4">
              <li>
                Developed Propsize, a web application for real estate analysis,
                utilizing Next.js, React, and Postgres.
              </li>
              <li>
                Integrated payment systems with Stripe and built an AI chatbot
                for property-related tasks using OpenAI, RabbitMQ, and Redis.
              </li>
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      {/* Freelance Projects */}
      <Timeline.Item>
        <Timeline.Point icon={FaCalendarAlt} />
        <Timeline.Content>
          <Timeline.Time className="text-teal-700 font-bold">
            Jan 2023 - Jul 2024
          </Timeline.Time>
          <Timeline.Title className="text-black ">
            Freelance Projects
          </Timeline.Title>
          <Timeline.Body>
            <ul className="list-disc list-inside text-black ml-4">
              <li className="mb-2">
                <a
                  href="https://github.com/charanreddy24/condo-pulse-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer "
                >
                  Real-Time Chat Application & Security Operations Software:
                </a>
                <br />
                <span className="text-sm">
                  Developed a comprehensive solution for a Security Company
                  using the React, Express & MongoDB, enhancing communication
                  and security operations for condominiums.
                </span>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/sm86/destake/tree/main/react-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer "
                >
                  Blockchain Decentralization Visualization:
                </a>
                <br />
                <span className="text-sm">
                  Led the development of a web application focused on blockchain
                  research in collaboration with a Ph.D. researcher, showcasing
                  my ability to translate complex research into user-friendly
                  interfaces.
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
          <Timeline.Time className="text-teal-700 font-bold">
            Jan 2021 - Dec 2022
          </Timeline.Time>
          <Timeline.Title className="text-black ">
            Tata Consultancy Services (TCS)
          </Timeline.Title>
          <Timeline.Body>
            <ul className="list-disc list-inside text-black ml-4">
              <li>
                Worked on various projects, including developing network
                management systems for Ericsson.
              </li>
              <li>
                Full-stack development, system administration, and cloud
                infrastructure management.
              </li>
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      {/* Yash Technologies experience */}
      <Timeline.Item>
        <Timeline.Point icon={FaCalendarAlt} />
        <Timeline.Content>
          <Timeline.Time className="text-teal-700 font-bold">
            Jun 2018 - Dec 2020
          </Timeline.Time>
          <Timeline.Title className="text-black ">
            Yash Technologies
          </Timeline.Title>
          <Timeline.Body>
            <ul className="list-disc list-inside text-black ml-4">
              <li>
                Enhanced expertise in Linux system administration, cloud
                infrastructure management, CI/CD automation, and DevOps
                practices.
              </li>
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
