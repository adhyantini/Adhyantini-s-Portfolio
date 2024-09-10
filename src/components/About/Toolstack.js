import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiWindows11,
  SiLinux,
  SiEclipseide,
  SiTableau,
  SiJenkins,
  SiJirasoftware

} from "react-icons/si";
import githhub_actions from "../../Assets/github_actions.png"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <p style={{ fontSize: "0.3em"}}> Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{ fontSize: "0.3em"}}> Linux </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "0.3em"}}> VS Code </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <p style={{ fontSize: "0.3em"}}> Eclipse</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "0.3em"}}> Postman</p>
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={githhub_actions}
                alt="github actions"
                // className="img-fluid"
                style={{ maxHeight: "90px", maxWidth: "90px", paddingTop: "10px", paddingBottom:"10px" }}
              />
              <p style={{ fontSize: "0.3em"}}> Github Actions</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p style={{ fontSize: "0.3em"}}> Jenkins</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={{ fontSize: "0.3em"}}> Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
        <p style={{ fontSize: "0.3em"}}> Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <p style={{ fontSize: "0.3em"}}> Tableau</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
