import React, { forwardRef } from 'react';
import { Button } from 'flowbite-react';
import { ImGithub } from 'react-icons/im';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
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
              Highly skilled Full Stack Developer with over 4 years of
              experience in designing and implementing web applications.
              Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js)
              with extensive experience in Linux system administration, cloud
              infrastructure management, and CI/CD automation. Adept at
              developing robust, scalable, and user-centric solutions, and
              collaborating with cross-functional teams to deliver high-quality
              projects.
            </p>
          </div>
        </header>

        <section className="bg-[#F5E663] pl-1">
          <div className="max-w-4xl w-11/12 mx-auto py-8">
            <h2 className="text-3xl mb-4">Work Experience</h2>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="col-span-3">
                <h3 className="mb-1 font-semibold">
                  Tata Consultancy Services(TCS), Hyderabad{' '}
                </h3>
                <p className="italic text-teal-700">
                  Jan 2021 to Dec 2022 <br /> Full Stack Software Developer
                </p>
              </div>
              <div className="col-span-3 ml-6">
                <h4 className="font-semibold mb-2">
                  Key Contributions and Significant Advancements in Client
                  Service:
                </h4>
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Network Management System Development:</strong>{' '}
                    Collaborated with Ericsson, an Irish client, to develop a
                    robust network management system for monitoring network
                    elements.
                  </li>
                  <li>
                    <strong>MERN Stack Implementation:</strong> Led the design
                    and implementation of software components using the MERN
                    stack, ensuring real-time monitoring and data analysis.
                  </li>
                  <li>
                    <strong>Frontend Development:</strong> Developed dynamic and
                    responsive user interfaces with React.js, CSS, and
                    TypeScript, significantly enhancing user experience.
                  </li>
                  <li>
                    <strong>Server Configuration and Optimization:</strong>{' '}
                    Configured and optimized Red Hat Enterprise Linux (RHEL)
                    servers, incorporating advanced Linux hardening techniques
                    for enhanced security and reliability.
                  </li>
                  <li>
                    <strong>Apache Server Installation:</strong> Compiled and
                    installed Apache Server from source code, integrating robust
                    Linux hardening measures.
                  </li>
                  <li>
                    <strong>API and Data Management:</strong> Created RESTful
                    APIs with Node.js and Express for efficient frontend-backend
                    communication and implemented GraphQL for optimized data
                    querying and manipulation.
                  </li>
                  <li>
                    <strong>Version Control Management:</strong> Managed
                    application patches and upgrades using Git, Gerrit, and
                    GitHub, ensuring seamless version control and team
                    collaboration.
                  </li>
                  <li>
                    <strong>Unit Testing:</strong> Utilized Jest to write
                    comprehensive test suites, ensuring system reliability and
                    robustness.
                  </li>
                  <li>
                    <strong>Containerization and Orchestration:</strong>{' '}
                    Implemented Docker and Kubernetes for containerization and
                    orchestration, ensuring system scalability and resilience.
                  </li>
                  <li>
                    <strong>Automated Deployment:</strong> Streamlined
                    development and deployment lifecycle with Jenkins pipelines
                    tailored for microservices architecture.
                  </li>
                  <li>
                    <strong>Load Balancing:</strong> Configured HAproxy for
                    efficient load balancing across various deployments,
                    optimizing system performance.
                  </li>
                  <li>
                    <strong>Cloud Services Administration:</strong> Configured
                    and administered AWS services, including EC2 instances and
                    VPCs, supporting system deployment and operation.
                  </li>
                  <li>
                    <strong>Private Cloud Architecture:</strong> Utilized
                    OpenStack for private cloud architecture and administration,
                    meeting specific client requirements.
                  </li>
                  <li>
                    <strong>Agile Project Management:</strong> Designed project
                    workflows following Agile methodologies within Azure DevOps,
                    enabling seamless collaboration and code management.
                  </li>
                  <li>
                    <strong>Enhanced System Security:</strong> Generated and
                    implemented SSL certificates, automated system tasks with
                    Bash scripts, and addressed vulnerabilities to ensure system
                    integrity.
                  </li>
                </ul>
              </div>
              <div className="col-span-3">
                <h3 className="mb-1 font-semibold">
                  Yash Techonologies, Hyderabad{' '}
                </h3>
                <p className="italic text-teal-700">
                  Jun 2020 to Dec 2020 <br /> DevOps Engineer
                </p>
              </div>
              <div className="col-span-3 ml-6">
                <h4 className="font-semibold mb-2">
                  Key Contributions and Significant Advancements in Client
                  Service:
                </h4>
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Linux System Administration:</strong> Configured and
                    optimized RHEL servers with advanced Linux hardening
                    techniques.
                  </li>
                  <li>
                    <strong>Cloud Infrastructure Management:</strong> Utilized
                    OpenStack for private cloud setup and Docker for container
                    operations.
                  </li>
                  <li>
                    <strong>CI/CD Automation:</strong> Automated build and
                    deployment processes with Jenkins pipelines for
                    microservices.
                  </li>
                  <li>
                    <strong>Kubernetes Administration:</strong> Configured
                    SIDE-CAR and AMBASSADOR containers in Kubernetes Pods.
                  </li>
                  <li>
                    <strong>AWS Administration:</strong> Configured and managed
                    AWS services like EC2, IAM, VPC, and ELBs.
                  </li>
                  <li>
                    <strong>Agile Development:</strong> Designed workflows using
                    Agile methodologies in Azure DevOps.
                  </li>
                  <li>
                    <strong>Troubleshooting:</strong> Resolved issues in
                    third-party applications and server components.
                  </li>
                  <li>
                    <strong>Security Enhancement:</strong> Enhanced system
                    security with SSL certificates and automated tasks using
                    scripting.
                  </li>
                  <li>
                    <strong>Frontend Technologies Troubleshooting:</strong>{' '}
                    Addressed frontend issues with HTML, CSS, and JavaScript.
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
                  <a
                    href="https://condo-concierge.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="button"
                      outline
                      className="inline-flex items-center w-32 mt-2 rounded-lg text-center text-xs font-medium text-white bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                    >
                      Domain
                      <HiArrowRight className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="col-span-3 ml-6">
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Real-time Chat Application Development:</strong>{' '}
                    Implemented real-time communication features using Socket.io
                    Client.
                  </li>
                  <li>
                    <strong>Frontend Development:</strong> Developed and
                    maintained frontend web applications using HTML, Tailwind
                    CSS, JavaScript, React.js, TypeScript, Vite, and Redux.
                  </li>
                  <li>
                    <strong>State Management:</strong> Implemented Redux for
                    efficient state management, ensuring seamless persistence of
                    user data.
                  </li>
                  <li>
                    <strong>User Interface Enhancement:</strong> Utilized
                    Flowbite React, Framer Motion, React Hot Toast, React Icons,
                    React Quill, React Circular Progress bar, and React
                    Draggable to create a dynamic and responsive user interface.
                  </li>
                  <li>
                    <strong>API and Authentication:</strong> Created RESTful
                    APIs using Node.js and Express, and integrated Firebase and
                    JWT tokens for secure authentication.
                  </li>
                  <li>
                    <strong>Data Management:</strong> Employed MongoDB for
                    efficient data storage and retrieval, ensuring scalability
                    and performance.
                  </li>
                  <li>
                    <strong>
                      Middleware Configuration and Error Handling:
                    </strong>{' '}
                    Configured middleware functions in Express.js to handle
                    errors and other functionalities seamlessly.
                  </li>
                  <li>
                    <strong>Version Control:</strong> Managed source control
                    repositories with Git, implementing effective branching
                    strategies and pull request workflows.
                  </li>
                  <li>
                    <strong>Development Tools:</strong> Utilized additional
                    backend packages such as @aws-sdk/client-s3,
                    @aws-sdk/s3-request-presigner, Bcryptjs, Cookie-parser,
                    Cors, Dotenv, Multer, Node-schedule, Socket.io,
                    Jsonwebtoken, and Moment for enhanced functionality.
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="col-span-3">
                <h3 className="mb-1 font-bold mt-4">
                  Visualization of Blockchain Decentralization
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
                  <a
                    href="https://decentralize.fyi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="button"
                      outline
                      className="inline-flex items-center w-32 mt-2 rounded-lg text-center text-xs font-medium text-white bg-gradient-to-r from-blueToGreenStart to-blueToGreenEnd"
                    >
                      Domain
                      <HiArrowRight className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="col-span-3 ml-6">
                <ul className="list-disc list-inside text-justify space-y-1">
                  <li>
                    <strong>Research Collaboration:</strong> Spearheaded the
                    development and deployment of a web application centered
                    around blockchain decentralization, collaborating closely
                    with a University of Toronto Ph.D. student.
                  </li>
                  <li>
                    <strong>Frontend Development:</strong> Developed a
                    well-designed and testable codebase using React.js,
                    incorporating Material-UI (MUI) components to enhance user
                    experience.
                  </li>
                  <li>
                    <strong>Deployment:</strong> Deployed the application on an
                    Ubuntu machine with Apache HTTP web server, configuring
                    virtual hosts for seamless backend integration developed in
                    Flask.
                  </li>
                  <li>
                    <strong>Backend Deployment:</strong> Implemented backend
                    deployment with Gunicorn, optimizing performance and
                    scalability.
                  </li>
                  <li>
                    <strong>Hosting and Domain Management:</strong> Successfully
                    hosted the entire application under the domain
                    decentralize.fyi, demonstrating expertise in full-stack
                    development, deployment, and hosting.
                  </li>
                  <li>
                    <strong>Security Implementation:</strong> Ensured secure
                    communication between frontend and backend services by
                    implementing SSL encryption protocols such as HTTPS and
                    TLSv1.2, and generating SSL certificates.
                  </li>
                  <li>
                    <strong>Code Quality and Version Control:</strong>{' '}
                    Maintained high coding standards by adhering to ESLint rules
                    and optimized performance by implementing code splitting and
                    virtual DOM techniques.
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
                Graduate in Project Management Program
                <br /> Jan 2023 to Jul 2024
              </p>
            </section>
            <section>
              <h3 className="mb-1">
                Jawaharlal Nehru Technological University - Kakinada, India
              </h3>
              <p className="w-3/5 italic text-teal-700">
                Bachelor of Technology in Electronics & Communication
                Engineering <br /> Jun 2016 to Apr 2020
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
                HTML, CSS, JavaScript, React.js Proficiency, Responsive Design,
                Tailwind CSS, Redux, zustand, Flowbite React, Material-UI,
                DaisyUI, Framer Motion, React Hot Toast, React Quill, React
                Draggable, Vite, Socket.io Client, Typescript, GraphQL, Jest, UI
                / UX, Figma, Wireframes, Model View Controller, hooks, PWAs
              </li>

              <li>
                <strong>Backend: </strong>
                Node.js, Next.js, Express.js, Python, Java, SQL, MySql, ruby on
                rails, C, Data Structures, Object-Oriented Programming - OOPs,
                Bash, MongoDB, Mongoose, Bcryptjs, JWT, Firebase,
                @aws-sdk/client-s3, @aws-sdk/s3-request-presigner,
                Cookie-parser, Cors, Dotenv, Multer, Node-schedule, Socket.io,
                Jsonwebtoken, Moment, serverless architectures, Lambdas,
                DynamoDB, REST, SOAP, RDBMS
              </li>

              <li>
                <strong>DevOps/Infrastructure: </strong>
                RHEL-6,7 & CentOS Linux System Administration, Unix, AWS, EC2,
                Docker & Kubernetes K8s, Virtualization & Remoting Tools
                (VirtualBox, VMware, Mobaxterm, Putty), Git proficiency, CI / CD
                tools (GIT, GERRIT, GITHUB, Gitlab, JENKINS, MAVEN, NEXUS,
                SonarQube, Selenium ), Monitoring and Logging Tools (Grafana,
                ELK, ElasticSearch), Load Balancers (JBOSS modcluster, HAproxy),
                Apache Tomcat, SSO, OAuth, Certificate-based authentication,
                authorization, Web Servers (Apache Web Server, Nginx), Postman,
                Insomnia
              </li>

              <li>
                <strong>Other: </strong>
                API Integration, Network Concepts & Protocols (HTTP, HTTPS,
                TCP/IP, NFS, SSH, DNS, DHCP, ICMP, FTP), Agile, Scrum, Project
                Management Tools (JIRA, Confluence)
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-[#839dec] py-8">
          <div className="max-w-4xl w-11/12 mx-auto">
            <h2 className="text-3xl mb-4">Certifications</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                React - The Complete Guide (incl Hooks, React Router, Redux) by
                Jad Tutorial
              </li>
              <li>Learning MongoDB on LinkedIn Learning</li>
              <li>Learning Node.js on LinkedIn Learning</li>
              <li>Learning Express.js on LinkedIn Learning</li>
              <li>Advanced Node.js on LinkedIn Learning</li>
              <li>FEB-2019 Python Programming by NareshIT, Hyderabad</li>
              <li>JAN-2021 Programming Using Python by HackerRank</li>
              <li>FEB-2021 HTML Essential Training by LinkedIn</li>
              <li>MAR-2021 Linux System Administration by Udemy</li>
              <li>AUG-2021 Red-Hat Enterprise Linux Certificate by Udemy</li>
              <li>
                DEC-2021 Containerization using Docker and Kubernetes by
                LinkedIn learning
              </li>
              <li>
                JAN-2022 JavaScript Essential Training by LinkedIn Learning
              </li>
              <li>FEB-2022 AWS ESSENTIALS by LinkedIn Learning</li>
            </ul>
          </div>
        </section>

        <section className="bg-[#f3b353] py-8">
          <div className="max-w-4xl w-11/12 mx-auto">
            <h2 className="text-4xl mb-4">Achievements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                TCS awarded me with one “Best Employee of the Quarter”, three
                “Best Employee of the Month” awards.
              </li>
              <li>
                Five Applause Awards and On-Spot Awards were awarded by TCS for
                dedicated work and support to the client over extended hours and
                weekends.
              </li>
              <li>
                Awarded with “Learning Achievement Award” by Tata Global
                Learning Delivery.
              </li>
              <li>
                Fresco play miles awards for learning wide range of
                technological concepts.
              </li>
            </ul>
          </div>
        </section>

        {/*  */}
      </main>
    </div>
  );
});

export default Resume;
