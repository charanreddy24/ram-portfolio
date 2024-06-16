import React from 'react';

const Resume = () => {
  return (
    <main className="font-sans text-base leading-relaxed">
      <header className="bg-[#EAE0D5] py-16">
        <div className="max-w-4xl w-11/12 mx-auto text-center">
          <h2 className="text-3xl mb-4">Professional Summary</h2>
          <p>
            Highly skilled Full Stack Developer with over 4 years of experience
            in designing and implementing web applications. Proficient in MERN
            stack (MongoDB, Express.js, React.js, Node.js) with extensive
            experience in Linux system administration, cloud infrastructure
            management, and CI/CD automation. Adept at developing robust,
            scalable, and user-centric solutions, and collaborating with
            cross-functional teams to deliver high-quality projects.
          </p>
        </div>
      </header>

      <section className="bg-[#F5E663] pl-1">
        <div className="max-w-4xl w-11/12 mx-auto py-16 border-b border-dashed border-[#343434]">
          <h2 className="text-3xl mb-4">Work Experience</h2>
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="col-span-3">
              <h3 className="mb-1">
                Tata Consultancy Services(TCS), Hyderabad{' '}
              </h3>
              <p className="italic">
                Jun 2020 to Dec 2022 <br /> Full Stack Software Developer
              </p>
            </div>
            <div className="col-span-3">
              <h4 className="font-semibold mt-2 mb-2">
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
                  <strong>MERN Stack Implementation:</strong> Led the design and
                  implementation of software components using the MERN stack,
                  ensuring real-time monitoring and data analysis.
                </li>
                <li>
                  <strong>Frontend Development:</strong> Developed dynamic and
                  responsive user interfaces with React.js, CSS, and TypeScript,
                  significantly enhancing user experience.
                </li>
                <li>
                  <strong>Server Configuration and Optimization:</strong>{' '}
                  Configured and optimized Red Hat Enterprise Linux (RHEL)
                  servers, incorporating advanced Linux hardening techniques for
                  enhanced security and reliability.
                </li>
                <li>
                  <strong>Apache Server Installation:</strong> Compiled and
                  installed Apache Server from source code, integrating robust
                  Linux hardening measures.
                </li>
                <li>
                  <strong>API and Data Management:</strong> Created RESTful APIs
                  with Node.js and Express for efficient frontend-backend
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
                  <strong>Automated Deployment:</strong> Streamlined development
                  and deployment lifecycle with Jenkins pipelines tailored for
                  microservices architecture.
                </li>
                <li>
                  <strong>Load Balancing:</strong> Configured HAproxy for
                  efficient load balancing across various deployments,
                  optimizing system performance.
                </li>
                <li>
                  <strong>Cloud Services Administration:</strong> Configured and
                  administered AWS services, including EC2 instances and VPCs,
                  supporting system deployment and operation.
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
                  implemented SSL certificates, automated system tasks with Bash
                  scripts, and addressed vulnerabilities to ensure system
                  integrity.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>

      <section
        className="bg-cover bg-top-right pb-24"
        style={{ backgroundImage: "url('/src/assets/education-pic.jpg')" }}
      >
        <div className="max-w-4xl w-11/12 mx-auto py-16 border-b border-dashed border-[#343434]">
          <h2 className="text-3xl mb-4">Education</h2>
          <section className="mb-6">
            <h3 className="mb-1">Algoma University - Brampton, Ontario</h3>
            <p className="w-3/5">
              Graduate in Project Management Program
              <br /> Jan 2023 to Jul 2024
            </p>
          </section>
          <section>
            <h3 className="mb-1">
              Jawaharlal Nehru Technological University - Kakinada, India
            </h3>
            <p className="w-3/5">
              Bachelor of Technology in Electronics & Communication Engineering{' '}
              <br /> Jun 2016 to Apr 2020
            </p>
          </section>
        </div>
      </section>

      <section className="bg-[#fab073] py-16">
        <div className="max-w-4xl w-11/12 mx-auto text-justify">
          <h2 className="text-3xl mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Frontend: </strong>
              HTML, CSS, JavaScript, React.js Proficiency, Responsive Design,
              Tailwind CSS, Redux, zustand, Flowbite React, Material-UI,
              DaisyUI, Framer Motion, React Hot Toast, React Quill, React
              Draggable, Vite, Socket.io Client, Typescript, GraphQL, Jest, UI /
              UX, Figma, Wireframes, Model View Controller, hooks, PWAs
            </li>

            <li>
              <strong>Backend: </strong>
              Node.js, Next.js, Express.js, Python, Java, SQL, MySql, ruby on
              rails, C, Data Structures, Object-Oriented Programming - OOPs,
              Bash, MongoDB, Mongoose, Bcryptjs, JWT, Firebase,
              @aws-sdk/client-s3, @aws-sdk/s3-request-presigner, Cookie-parser,
              Cors, Dotenv, Multer, Node-schedule, Socket.io, Jsonwebtoken,
              Moment, serverless architectures, Lambdas, DynamoDB, REST, SOAP,
              RDBMS
            </li>

            <li>
              <strong>DevOps/Infrastructure: </strong>
              RHEL-6,7 & CentOS Linux System Administration, Unix, AWS, EC2,
              Docker & Kubernetes K8s, Virtualization & Remoting Tools
              (VirtualBox, VMware, Mobaxterm, Putty), Git proficiency, CI / CD
              tools (GIT, GERRIT, GITHUB, Gitlab, JENKINS, MAVEN, NEXUS,
              SonarQube, Selenium ), Monitoring and Logging Tools (Grafana, ELK,
              ElasticSearch), Load Balancers (JBOSS modcluster, HAproxy), Apache
              Tomcat, SSO, OAuth, Certificate-based authentication,
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

      <section className="bg-[#839dec] py-16">
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
              DEC-2021 Containerization using Docker and Kubernetes by LinkedIn
              learning
            </li>
            <li>JAN-2022 JavaScript Essential Training by LinkedIn Learning</li>
            <li>FEB-2022 AWS ESSENTIALS by LinkedIn Learning</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#f3b353] py-16">
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
              Awarded with “Learning Achievement Award” by Tata Global Learning
              Delivery.
            </li>
            <li>
              Fresco play miles awards for learning wide range of technological
              concepts.
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-[#EBCFB2] py-16 ">
        <div className="max-w-4xl w-11/12 mx-auto">
          <h2 className="text-3xl mb-8">Let's Keep in Touch!</h2>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-justify">
              <li>
                Mobile No.{' '}
                <a
                  href="tel:+16474829114"
                  className="text-whitesmoke no-underline py-2 px-4 rounded text-teal-700 hover:underline"
                >
                  +1 (647) 482-9114
                </a>
              </li>
              <li>
                Address:{' '}
                <a
                  href="https://goo.gl/maps/dDyxmPFRKAS7RbVE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whitesmoke no-underline py-2 px-4 rounded text-teal-700 hover:underline"
                >
                  Scarborough, Toronto, ON
                </a>
              </li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-justify">
              <li>
                Email{' '}
                <a
                  href="mailto:ramcharan2510@gmail.com"
                  className="text-whitesmoke no-underline py-2 px-4 rounded text-teal-700 hover:underline"
                >
                  ramcharan2510@gmail.com
                </a>
              </li>
              <li>
                Social Media{' '}
                <a
                  href="https://www.linkedin.com/in/ram-charan-reddy-2b91b7138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whitesmoke no-underline py-2 px-4 rounded text-teal-700 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Resume;
