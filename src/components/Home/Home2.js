import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMediumSquare 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             HELLO!
            </h1>
            <p className="home-about-body">
            I’m Adhyantini Bogawat from <b className="purple"> Boston, Massachusetts.</b> 
            <br></br> I'm a <b className="purple"> software developer </b> with a passion for creating efficient and innovative solutions for complex problems.
            <br></br>Whether it’s developing scalable cloud infrastructure or building sleek web apps, I’m always eager to push the boundaries of technology.
            Welcome to my portfolio, where you’ll find some of my projects and the skills I bring to the table!
        </p>
          </Col>
    
        </Row>
        <Row className="justify-content-center">
          <Col md={10} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adhyantini"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adhyantini-bogawat/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://adhyantini.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumSquare />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
