import React,{useContext} from 'react';


import { Container } from "react-bootstrap";
import Particle from "../Particle";
import './Experience.css';
import ExperienceCard from './ExperienceCard';

function Experience() {

  
    return (
      <Container fluid className="project-section">
      <Particle />
      <h1 className="project-heading"> Work <strong className="purple"> Experience </strong> </h1>
        <div className="experience" id="experience" style={{backgroundColor: "a24dd386"}}> 
             <div className="experience-body">
                 <div className="experience-description">
                        <ExperienceCard 
                            key="1"
                            id="1"
                            jobtitle="Sofware Engineer Co-op"
                            company="ESG Global LLC"
                            startYear="July 2023"
                            endYear="December 2023"
                            location= "Norwell, Massachusetts"
                            link = "https://esgglobal.com/"
                            description={`Developed Selenium WebDriver automation scripts in Java for REST API & UI verification, enhancing test coverage by 40%.
                                Automated data migration processes using Java & Apache POI, converting data from Excel files to properties files; slashed manual processing time by over 50%.
                                Enhanced overall application security by integrating AWS secret manager for sensitive data storage.
                                Led troubleshooting and performance optimisation of Oracle SQL queries, enhancing system efficiency by 25%.
                                Utilised Agile methodologies for timely and efficient software releases; maintained code quality via code review processes.`}
                            />

                        <ExperienceCard 
                            key="2"
                            id="2"
                            jobtitle="Sofware Developer"
                            company="Persistent Systems"
                            startYear="June 2020"
                            endYear="June 2022"
                            location= "Pune, India"
                            link = "https://www.persistent.com/"
                            description={` Engineered microservices-based data pipelines using Node.js for IBM’s product AppConnect, improving data transfer efficiency across applications by 100%
                                           Collaborated with product managers on technical decisions, leading to a 25% reduction in development cycle times
                                           Executed unit tests using BDD principles with Mocha and Sinon.js, ensuring comprehensive test coverage and promoting code maintainability
                                           Engaged in project enhancements using Node.js, improving functionality and user experience by 15%
                                           Implemented CI/CD pipelines using Jenkins and Git on IBM Cloud & OpenShift, increasing deployment efficiency by 30%`}
                            />
                  
                 </div>
             </div>
        </div>
        </Container>
    )
}

export default Experience