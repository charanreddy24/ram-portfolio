import React, { forwardRef } from 'react';
import { Button } from 'flowbite-react';
import { ImGithub } from 'react-icons/im';
import { HiArrowRight } from 'react-icons/hi';
import eduPic from '/src/assets/education-pic.jpeg';

const Resume = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <main className="font-sans text-base leading-relaxed border-b-2 border-blue-400">
        <h1 className="text-3xl mt-2 flex items-center justify-center ">
          Resume
        </h1>
        <header className="bg-[#EAE0D5] py-8">
          <div className="max-w-4xl w-11/12 mx-auto text-center">
            <h2 className="text-3xl mb-4">Professional Summary</h2>
            <p>
              Full Stack Software Developer with over 6 years of experience in
              Java, MERN & MEAN stacks. Expertise in building and managing APIs,
              microservices, and backend services using Spring Boot, NestJS, and
              Node.js. Skilled in AWS cloud services, CI/CD pipelines, Docker,
              Kubernetes, and Terraform. Proven track record in leading
              projects, including real-time chat applications, AI-driven tools,
              and blockchain decentralization solutions, utilizing technologies
              like React.js, Python, and Spring Boot. Proficient in agile
              methodologies and ensuring secure, optimized system architectures.
            </p>
          </div>
        </header>

        <section className="bg-[#F5E663] pl-1">
          <div className="max-w-4xl w-11/12 mx-auto py-8">
            <h2 className="text-3xl mb-4">Work Experience</h2>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Shift AI */}
              <div className="col-span-3">
                <h3 className="mb-1 font-semibold">Shift AI</h3>
                <p className="italic text-teal-700">
                  Sep 2024 - Present <br /> Full Stack Software Developer
                </p>
              </div>
              <div className="col-span-3 ml-6">
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Fleet Management & Telematics System:</strong>{' '}
                    Leading the development of a microservices-based fleet
                    management and telematics platform using NestJS, React, and
                    PostgreSQL.
                  </li>
                  <li>
                    <strong>Real-Time Communication:</strong> Implemented
                    real-time communication features using WebSockets and MQTT
                    for telemetry data processing.
                  </li>
                </ul>
              </div>

              {/* House Stack Realty */}
              <div className="col-span-3">
                <h3 className="mb-1 font-semibold">House Stack Realty</h3>
                <p className="italic text-teal-700">
                  Jul 2024 - Present <br /> Full Stack Software Developer
                </p>
              </div>
              <div className="col-span-3 ml-6">
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>AI Chatbot Development:</strong> Built an AI-driven
                    chatbot using OpenAI for property-related tasks, integrated
                    with RabbitMQ, Redis, and MongoDB.
                  </li>
                  <li>
                    <strong>Real Estate Web App:</strong> Developed Propsize, a
                    property analysis tool using Next.js, React, and Postgres,
                    integrated with Stripe for payments.
                  </li>
                </ul>
              </div>

              {/* TCS */}
              <div className="col-span-3">
                <h3 className="mb-1 font-semibold">
                  Tata Consultancy Services (TCS), Hyderabad
                </h3>
                <p className="italic text-teal-700">
                  Dec 2020 to Dec 2022 <br /> Full Stack Software Developer
                </p>
              </div>
              <div className="col-span-3 ml-6">
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Network Management System Development:</strong>{' '}
                    Partnered with Ericsson (Ireland) on network management
                    system development.
                  </li>
                  <li>
                    <strong>Frontend Development:</strong> Developed and
                    maintained modern web applications using HTML5, CSS3,
                    JavaScript frameworks (Angular, React.js).
                  </li>
                  <li>
                    <strong>Backend Development:</strong> Built APIs with Spring
                    Boot and Java, implementing microservices architecture.
                  </li>
                  <li>
                    <strong>AWS Services:</strong> Leveraged AWS services such
                    as EC2, S3, RDS, and VPC.
                  </li>
                  <li>
                    <strong>Containerization:</strong> Dockerized applications
                    and utilized Kubernetes for orchestration.
                  </li>
                  <li>
                    <strong>CI/CD:</strong> Managed pipelines with Jenkins and
                    used GitHub for version control.
                  </li>
                </ul>
              </div>

              {/* Yash Technologies */}
              <div className="col-span-3">
                <h3 className="mb-1 font-semibold">
                  Yash Technologies, Hyderabad
                </h3>
                <p className="italic text-teal-700">
                  Jun 2018 to Dec 2020 <br /> Software Developer
                </p>
              </div>
              <div className="col-span-3 ml-6">
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Server Configuration:</strong> Configured RHEL
                    servers with advanced hardening techniques.
                  </li>
                  <li>
                    <strong>Microservices:</strong> Developed microservices
                    architecture using Spring Boot and managed with Chef.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        <section className="bg-[#d3b6ff] pl-1">
          <div className="max-w-4xl w-11/12 mx-auto py-8">
            <h2 className="text-3xl mb-4">Projects</h2>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="col-span-3">
                <h3 className="mb-1 font-bold">
                  Condominium Security Operations Software
                </h3>
                <p className="italic">Full Stack Developer</p>
                <div className="flex justify-start items-center space-x-4">
                  <a
                    href="https://github.com/charanreddy24/condo-pulse-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-black"
                  >
                    <Button
                      type="button"
                      outline
                      className="inline-flex items-center w-32 mt-2 rounded-lg text-center text-xs font-medium text-white bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd"
                    >
                      <ImGithub className="text-2xl mr-2" />
                      <span>GitHub</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="col-span-3 ml-6">
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Real-time Chat Application Development:</strong>{' '}
                    Implemented real-time communication using Socket.io.
                  </li>
                  <li>
                    <strong>Frontend Development:</strong> Developed using
                    React.js, Tailwind CSS, and Vite.
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="col-span-3">
                <h3 className="mb-1 font-bold mt-4">
                  Blockchain Decentralization Visualization
                </h3>
                <p className="italic">React Developer</p>
                <div className="flex justify-start items-center space-x-4">
                  <a
                    href="https://github.com/sm86/destake/tree/main/react-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-black"
                  >
                    <Button
                      type="button"
                      outline
                      className="inline-flex items-center w-32 mt-2 rounded-lg text-center text-xs font-medium text-white bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd"
                    >
                      <ImGithub className="text-2xl mr-2" />
                      <span>GitHub</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="col-span-3 ml-6">
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Research Collaboration:</strong> Spearheaded the
                    development of a web application for blockchain research
                    with a Ph.D. student from the University of Toronto.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        <section
          className="bg-cover bg-top-right pb-24"
          style={{ backgroundImage: `url(${eduPic})` }}
        >
          <div className="max-w-4xl w-11/12 mx-auto py-8 border-b border-dashed border-[#343434]">
            <h2 className="text-3xl mb-4">Education</h2>
            <section className="mb-6">
              <h3 className="mb-1">Algoma University - Brampton, Ontario</h3>
              <p className="w-3/5 italic text-teal-700">
                Graduate Certificate in Project Management
                <br /> Jan 2023 to Jul 2024
              </p>
            </section>
            <section>
              <h3 className="mb-1">
                Jawaharlal Nehru Technological University - Kakinada, India
              </h3>
              <p className="w-3/5 italic text-teal-700">
                Bachelor of Technology in Electronics & Communication
                Engineering <br /> Jun 2014 to Apr 2018
              </p>
            </section>
          </div>
        </section>

        <section className="bg-[#fab073] py-8">
          <div className="max-w-4xl w-11/12 mx-auto text-justify">
            <h2 className="text-3xl mb-4">Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Frontend: </strong>
                HTML, CSS, JavaScript, React.js, TypeScript, Tailwind CSS,
                Redux, Vite, Socket.io Client, GraphQL, Jest, Framer Motion
              </li>

              <li>
                <strong>Backend: </strong>
                Node.js, Next.js, Express.js, Nest.js, Python, Java, SQL,
                PostgreSQL, MongoDB, JWT, REST, SOAP
              </li>

              <li>
                <strong>DevOps/Infrastructure: </strong>
                AWS, Docker, Kubernetes, CI/CD (GitHub Actions, CircleCI,
                Jenkins), Terraform, Ansible, ELK Stack
              </li>

              <li>
                <strong>Other: </strong>
                Agile, Scrum, Project Management Tools (JIRA, Confluence), API
                Integration, Networking Protocols (TCP/IP, SSH, DNS)
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-[#839dec] py-8">
          <div className="max-w-4xl w-11/12 mx-auto">
            <h2 className="text-3xl mb-4">Certifications</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>React - The Complete Guide by Jad Tutorial</li>
              <li>Learning Node.js on LinkedIn Learning</li>
              <li>AWS Essentials by LinkedIn Learning</li>
              <li>Python Programming by NareshIT</li>
              <li>Red-Hat Enterprise Linux Certificate by Udemy</li>
              <li>
                Containerization with Docker and Kubernetes by LinkedIn Learning
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-[#f3b353] py-8">
          <div className="max-w-4xl w-11/12 mx-auto">
            <h2 className="text-4xl mb-4">Achievements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                TCS awarded me with “Best Employee of the Quarter” and “Best
                Employee of the Month” awards.
              </li>
              <li>
                Awarded with “Learning Achievement Award” by Tata Global
                Learning Delivery.
              </li>
              <li>
                Received multiple Applause and On-Spot Awards for dedication and
                support in TCS & Yash Technologies.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
});

export default Resume;
