import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
    
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Health Hive - Hospital System Chatbot"
              description="A chatbot designed to provide operational insights into hospital activities for stakeholders, particularly owners. It offers detailed analytics and reports on various aspects of hospital operations, including patient flow, resource utilization, financial performance, and staff efficiency. This chatbot leverages LLM(OpenAPI), Neo4j, RAG pipelines and Streamlit for the frontend."
              ghLink="https://github.com/adhyantini/Hospital-System-Chatbot"
              demoLink="https://youtu.be/nkC4x3Xt_II"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cloud Infrastructure Web Application"
              description="Developed a scalable application with Base64 authentication, handling 1000’s of concurrent requests. Deployed app on GCP with Terraform using Packer-customised compute engines. Modelled GitHub Actions to setup CI/CD pipelines for streamlining API delivery. Enhanced system monitoring and health checks by implementing OpsAgent for efficient data logging. Engineered event-driven architecture using Google Pub/Sub and serverless functions to automate user verification emails via Mailchimp."
              ghLink="https://github.com/adhyantini/Cloud-Infrastructre-Web-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog Web Application"
              description="A personal blog web app developed using Django and React.js. Utilised JWT tokens for secure user authentication and enabled CRUD operations for posts and comments.  Provided an admin dashboard for managing posts and users, with a responsive and mobile-friendly design "
              ghLink="https://github.com/adhyantini/Blog-Application"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Project Management Tool"
              description="A project management tool designed to help project managers keep track of all projects under them. This is designed using the MERN stack. Used chart.js, HTML, SCSS for displaying statistics about the projects in their various completion stages and a feature to download them."
              ghLink="https://github.com/adhyantini/project-management-tool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel Booking "
              description=" Designed a Java-based hotel booking system with Spring, Hibernate, integrating responsive HTML and CSS interfaces for
                            real-time user interactions.
                            Managed robust database operations and data integrity using Hibernate for efficient CRUD operations.
                            Conducted system testing using JUnit and Mockito"
              ghLink="https://github.com/adhyantini-bogawat/Hotel-Booking-Application"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Secure Communication Channel for IOT Devices"
              description="Built a web app for automated electricity billing from power meters, reducing manpower by 60% and modernizing the system. Designed backend in Python-Flask and the frontend using Bootstrap, HTML, CSS.
                        Developed end-to-end encrypted channel using multiple cryptographic algorithms such as ECDSA, RSA, AES, SHA, ECDHE"
              ghLink="https://github.com/adhyantini/Secure-Communication-Channel-For-IOT-Devices"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
