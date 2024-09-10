import React, { Component } from "react";
import { Fade, Flip } from "react-reveal";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import neu from "../../Assets/Education/neu.png"
import sppu from "../../Assets/Education/sppu.png"

class Educations extends Component {
  render() {
    return (
      <>
      <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My <strong className="purple">Degrees </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} style={{
            paddingTop: "30px",
            paddingBottom: "50px",
          }}>

            <Flip left duration={2000}>

              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={neu}
                alt="Northeastern University" />

            </Flip>
          </Col>
          <Col md={8} style={{
            paddingTop: "30px",
            paddingBottom: "50px",
          }}>
            <Fade right duration={2000} distance="40px">
                     
            <div
                  className="body-header"
                  style={{ backgroundColor: "#a24dd386" }}
                >
                  <div className="body-header-title">
                    <h2 className="card-title" style={{ color: "#fff" }}>
                      Northeastern University
                    </h2>
                    <h3 className="card-subtitle" style={{ color: "#fff" }}>
                     MS in Information Systems
                    </h3>
                  </div>
                  <div className="body-header-duration">
                    <h5 className="duration" style={{ color: "#fff" }}>
                      2022-2024
                    </h5>
                  </div>
                </div>
                <div className="body-content">

                  <p className="content-list" style={{ color: "#fff" }}>
                  Relevant Coursework: Prompt Engineering, Network Structures and Cloud Computing, Database Management and Database Design,
                  Web Design and User Experience Engineering
                  <br></br>
                  <br></br>
                    GPA: 3.7/4.00
                  </p>


                  <a
                    href="https://www.northeastern.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="visit-btn"
                      style={{ backgroundColor: "#a24dd386" }}
                    >
                      <p className="btn" style={{ color: "#fff" }}>
                        Visit Website
                      </p>
                    </div>
                  </a>

                </div>
            </Fade>
          </Col>
        </Row>
        <br />
        <br />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} style={{
            paddingTop: "30px",
            paddingBottom: "50px",
          }}>
            <Flip left duration={2000}>

              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={sppu}
                alt="Pune University" />

            </Flip>
          </Col>

          <Col md={8} style={{
            paddingTop: "30px",
            paddingBottom: "50px",
          }}>
            <Fade right duration={2000} distance="40px">
           
                <div
                  className="body-header"
                  style={{ backgroundColor: "#a24dd386" }}
                >
                  <div className="body-header-title">
                    <h2 className="card-title" style={{ color: "#fff" }}>
                      Pune University
                    </h2>
                    <h3 className="card-subtitle" style={{ color: "#fff" }}>
                      BE in Computer Engineering
                    </h3>
                  </div>
                  <div className="body-header-duration">
                    <h5 className="duration" style={{ color: "#fff" }}>
                      2016-2020
                    </h5>
                  </div>
                </div>
                <div className="body-content">

                  <p className="content-list" style={{ color: "#fff"}}>
                    Relevant Coursework: Advanced Data Structures & Algorithms, Object-oriented Design, Principles of Programming Languages
                  <br></br>
                  <br></br>
                    GPA: 8.93/10.00
                  </p>


                  <a
                    href="http://www.unipune.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div
                      className="visit-btn"
                      style={{ backgroundColor: "#a24dd386" }}
                    >
                      <p className="btn" style={{ color: "#fff" }}>
                        Visit Website
                      </p>
                    </div>
                  </a>

                </div>
           
            </Fade>
          </Col>
        </Row>
      </Container>
      </Container></>
    );
  }
}

export default Educations;