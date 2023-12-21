import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Coke from "../../Assets/Projects/Coke&Code.png";
import MediStop from "../../Assets/Projects/MediStop.png";
import NetFlix from "../../Assets/Projects/NetFlix.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MediStop}
              isBlog={false}
              title="Digital Satya"
              description="Digital satya is a digital marketing agency."
              ghLink="#"
              demoLink="https://www.digitalsatya.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coke}
              isBlog={false}
              title="Coke&Code upcomming"
              description="Code, Compete, Win. Build cool and crazy projects, compete with geeky minds as you, win a coke and more. The webiste basically focuses on organizing various coding contests and make you feel the real coding environment."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetFlix}
              isBlog={false}
              title="NetFlix Clone upcomming"
              description="Netflix Clone is an attempt to clone the Netflix Website, where the user can 
              • Create an account using the email and can login on website.
              • Watch trailers and promos of the TV shows, web series, movies, etc"
              ghLink="#"
              demoLink = "#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
