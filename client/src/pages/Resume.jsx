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
              Accomplished Senior Software Engineer with over 6 years of
              experience developing robust, secure, and scalable systems.
              Specializing in Java, Springboot, JavaScript, TypeScript, React,
              NestJS, and Node.js, with deep expertise in cloud platforms (AWS)
              and containerization (Docker, Kubernetes). Proven ability to lead
              cross-functional teams, mentor junior engineers, and design
              cloud-agnostic architectures. Skilled in automation, CI/CD
              practices, and delivering high-quality production systems with a
              focus on user security and seamless performance. Experienced in
              optimizing SQL databases and setting up DevOps best practices for
              enterprise applications.
            </p>
          </div>
        </header>

        <section className="bg-[#F5E663] pl-1">
          <div className="max-w-4xl w-11/12 mx-auto py-8">
            <h2 className="text-3xl mb-4">Work Experience</h2>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Shift AI & House Stack Realty */}
              <div class="col-span-3">
                <h3 class="mb-1 font-semibold">
                  Shift AI & House Stack Realty
                </h3>
                <p class="italic text-teal-700">
                  Jul 2024 - Present <br /> Full Stack Software Developer
                </p>
              </div>
              <div class="col-span-3 ml-6">
                <ul class="list-disc list-inside text-justify space-y-1">
                  <p>
                    <strong>Project: Shift Fleet Management Software</strong>{' '}
                    Spearheaded the development of a fleet management and
                    telematics platform using NestJS, React, and PostgreSQL,
                    deployed on AWS EC2 with Nginx for hosting frontend files,
                    and RDS for Database.
                  </p>
                  <li>
                    Database Design: Designed and implemented complex database
                    schemas, including ERD and RBAC systems, ensuring secure and
                    efficient data management.
                  </li>
                  <li>
                    Authentication: Implemented Authentication using Google
                    OAuth and JWT-based authentication with Passport, issuing
                    refresh tokens for secure user access.
                  </li>
                  <li>
                    Data Visualization: Developed real-time data visualization
                    using Chart.js for vehicle data on dashboards, including
                    custom graphs and speedometers for real-time metrics.
                  </li>
                  <li>
                    Real-time Communication: Integrated Socket.io for live
                    communication and real-time vehicle tracking, with MQTT for
                    efficient handling of vehicle telemetry.
                  </li>
                  <li>
                    Microservices Architecture: Built microservices architecture
                    for real-time vehicle data processing using NestJS and
                    Prisma ORM for database management.
                  </li>
                  <li>
                    State Management: Utilized Redux for efficient state
                    management and real-time updates on the frontend.
                  </li>
                  <li>
                    CI/CD Pipelines: Set up automated CI/CD pipelines using
                    GitHub Actions, writing installation and deployment scripts
                    for consistent updates.
                  </li>
                  <li>
                    Real-time Notifications: Developed real-time notifications
                    using Socket.io and Redis for critical vehicle updates.
                  </li>
                  <li>
                    Geolocation: Integrated external services like Mapbox for
                    real-time vehicle location tracking and route visualization.
                  </li>
                  <li>
                    Testing: Written and executed test cases using Cypress for
                    frontend and Mockito for backend services.
                  </li>
                </ul>
              </div>

              <div class="col-span-3 ml-6">
                <ul class="list-disc list-inside text-justify space-y-1">
                  <p>
                    <strong>Project: Propsize</strong> Developed Web
                    Application, a property analysis tool using Next.js, React,
                    and Postgres, integrated with Stripe for payments.
                  </p>
                  <li>
                    Backend Services: Built backend services using Node.js and
                    Express.js, integrating Bull for job processing, and Redis
                    for caching.
                  </li>
                  <li>
                    Email & Phone Verification: Implemented email and phone
                    verification, Google Authentication using Firebase, and PDF
                    generation using Puppeteer and HTML2Canvas.
                  </li>
                  <li>
                    Payments: Integrated Stripe for payments, setting up
                    webhooks for real-time payment status updates.
                  </li>
                  <li>
                    Admin Dashboard: Created an admin dashboard to track user
                    activity via Google Analytics.
                  </li>
                  <li>
                    CDN & DNS Services: Utilized Cloudfare as CDN for file
                    hosting and DNS services.
                  </li>
                </ul>
              </div>

              <div class="col-span-3 ml-6">
                <ul class="list-disc list-inside text-justify space-y-1">
                  <p>
                    <strong>Project: AI Chatbot Development </strong>
                    Developed a plugin-based AI chatbot to detect user intents
                    and trigger API calls for property-related tasks using
                    React.js, Redux, and Node.js.
                  </p>
                  <li>
                    Real-time Communication: Utilized WebSockets for real-time
                    communication and OpenAI APIs for natural language
                    processing.
                  </li>
                  <li>
                    Data Storage: Integrated PostgreSQL to store conversations,
                    intents, and MongoDB for semi-structured data, using
                    RabbitMQ for message queuing.
                  </li>
                </ul>
              </div>

              {/* TCS */}
              <div class="col-span-3">
                <h3 class="mb-1 font-semibold">
                  Tata Consultancy Services (TCS), Hyderabad
                </h3>
                <p class="italic text-teal-700">
                  Dec 2020 - Dec 2022 <br /> Full Stack Software Developer
                </p>
              </div>
              <div class="col-span-3 ml-6">
                <ul class="list-disc list-inside text-justify space-y-1">
                  <p>
                    <strong>
                      Project: Ericsson Network Management System{' '}
                    </strong>
                    Collaborated with Ericsson (Ireland) to develop a network
                    management system using Spring Boot and microservices
                    architecture.
                  </p>

                  <li>
                    Frontend Development: Developed web applications with
                    React.js and JavaScript, ensuring cross-platform
                    compatibility and performance optimization.
                  </li>
                  <li>
                    Backend Development: Built RESTful APIs with Spring Boot,
                    implementing JWT tokens for security and automating
                    deployments on AWS EC2.
                  </li>
                  <li>
                    AWS Services: Managed AWS services (EC2, VPC, S3, RDS) and
                    automated deployments using Jenkins pipelines.
                  </li>
                  <li>
                    Containerization: Dockerized applications for deployment in
                    Kubernetes clusters, and used Terraform for infrastructure
                    provisioning on AWS.
                  </li>
                  <li>
                    Logging & Monitoring: Implemented centralized logging with
                    the ELK Stack and monitoring with Prometheus and Grafana.
                  </li>
                  <li>
                    Agile Methodologies: Followed Agile methodologies using Jira
                    and Gerrit for code reviews, ensuring collaboration and
                    maintaining high-quality code.
                  </li>
                </ul>
              </div>

              {/* Yash Technologies */}
              <div class="col-span-3">
                <h3 class="mb-1 font-semibold">Yash Technologies, Hyderabad</h3>
                <p class="italic text-teal-700">
                  Jun 2018 - Dec 2020 <br /> Software Engineer
                </p>
              </div>
              <div class="col-span-3 ml-6">
                <ul class="list-disc list-inside text-justify space-y-1">
                  <p>
                    <strong>Project: Yash Tech Internal Project </strong>
                    Developed the Car Booking System for the internal employees
                    of Yash Technologies using microservices architecture.
                  </p>
                  <li>
                    Server Configuration: Configured RHEL servers with advanced
                    hardening techniques (node hardening, iptables, SELinux).
                  </li>
                  <li>
                    Microservices Development: Developed and maintained
                    microservices architecture using Java Spring Boot.
                  </li>
                  <li>
                    Containerization: Employed Docker and Kubernetes for
                    containerization and orchestration.
                  </li>
                  <li>
                    CI/CD Pipelines: Managed build automation with Jenkins and
                    artifact management using Nexus Repository.
                  </li>
                  <li>
                    Security & Monitoring: Implemented system security using
                    defenses against DDoS attacks, and monitored applications
                    with Splunk and AWS CloudWatch.
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
