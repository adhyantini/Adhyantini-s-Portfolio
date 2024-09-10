import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiGoogleCloudPlatform,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiDjango,
  SiFlask,
  SiHtml5,
  SiHuggingface,
  SiCsswizardry,
  SiOpenai,
  SiElastic,
  SiSelenium,
  SiSpringboot,
  SiStreamlit,
  SiTerraform
} from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';
// import { Font } from "@react-pdf/renderer";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "0.3em"}}> JavaScript</p>
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "0.3em"}}> Python</p>
      </Col>

     
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: "0.3em"}}> Java</p>
      </Col>
     

      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "0.3em"}}> Node.js</p>
      </Col>
   

    
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "0.3em"}}> React</p>
      </Col>


    
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <p style={{ fontSize: "0.3em"}}> Django</p>
      </Col>
  

 
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p style={{ fontSize: "0.3em"}}> Angular</p>
      </Col>
   


      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <p style={{ fontSize: "0.3em"}}> Streamlit</p>
      </Col>
   

    
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <p style={{ fontSize: "0.3em"}}> Springboot</p>
      </Col>
     

     
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{ fontSize: "0.3em"}}> HTML5</p>
      </Col>
   

   
      <Col xs={4} md={2} className="tech-icons">
        <SiCsswizardry />
        <p style={{ fontSize: "0.3em"}}> CSS</p>
      </Col>
    

      
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p style={{ fontSize: "0.3em"}}> Flask</p>
      </Col>
    

     
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <p style={{ fontSize: "0.3em"}}> Selenium</p>
      </Col>
    

      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "0.3em"}}> MongoDB</p>
      </Col>
   

   
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "0.3em"}}> Git</p>
      </Col>
  

    
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis/>
        <p style={{ fontSize: "0.3em"}}> Redis</p>
      </Col>
    

   
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "0.3em"}}> PostgreSQL</p>
      </Col>
  

   
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/>
        <p style={{ fontSize: "0.3em"}}> MySQL</p>
      </Col> 
    

     
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform/>
        <p style={{ fontSize: "0.3em"}}> Google Cloud Platform</p>
      </Col>
  

      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform/>
        <p style={{ fontSize: "0.3em"}}> Terraform</p>
      </Col>
        
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai/>
        <p style={{ fontSize: "0.3em"}}> OpenAI</p>
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiElastic/>
        <p style={{ fontSize: "0.3em"}}>  ElasticSearch</p>
      </Col>
    
    </Row>
  );
}

export default Techstack;
