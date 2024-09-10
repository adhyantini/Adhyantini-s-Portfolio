import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

// import { ThemeContext } from '../../contexts/ThemeContext';
import expImgWhite from "../../Assets/Experience/expImgWhite.svg"

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, location, link, description}) {

    // const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:"#a24dd386",
            "&:hover": {
                backgroundColor:"#8a49a8",
            },
        },
    }));

    const classes = useStyles();

    const descriptionPoints = description.split('\n').map((point, index) => (
        <li key={index}>{point}</li>
    ));

    console.log(descriptionPoints);
    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: "#dfc9ea"}}>
                    <img src={expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                <div className="title-line">
                    <h4 style={{ color: "#fff" }}>{jobtitle}</h4>
                    <h6 style={{ color: "#fff", marginLeft: "90%" }}>  {startYear}-{endYear}</h6>
                </div>
                <div className="company-line">
                    <a  href={link} target="_blank" rel="noopener noreferrer"><h5 style={{color: "#fff"}}>{company}</h5></a>
                    <h6 style={{ color: "#fff", marginLeft: "90%" }}> {location} </h6>
                </div>
                     <ul style={{ color: "#fff" }}>
                        {descriptionPoints}
                    </ul>
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard