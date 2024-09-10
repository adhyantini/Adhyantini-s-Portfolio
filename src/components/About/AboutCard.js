import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I graduated student from Northeastern University where I pursued my MS in Information Systems. I also hold a Bachelor's degree in Computer Engineering.
            {/* <br/> */}
            Over the years, I’ve had the opportunity to work on exciting projects in web development, cloud infrastructure, and automation, and I thrive on the constant learning that comes with it. 
            {/* <br/> */}
            With a strong background in <b className="purple">Node.js, Python, Java, and JavaScript,</b> I enjoy solving complex problems through clean, efficient code. 
            {/* <br /> */}
            My experience spans both  <b className="purple">cloud computing</b> and <b className="purple">DevOps,</b> specifically with <b className="purple">Google Cloud Platform (GCP),</b> where I design and deploy scalable infrastructures.
            {/* <br/> */}
            I'm equally adept at integrating <b className="purple">Git</b> for version control and collaborating on agile development teams. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into clean code and coffee into solutions"{" "}
          </p>
          <footer className="blockquote-footer">Adhyantini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
