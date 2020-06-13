import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import heroStyles from "../components/heroStyles.module.scss";

const Hero = () => {
    return (
        <div className={heroStyles.hero}>
            <div className={heroStyles.heroInner}>
                <div className={heroStyles.heroInnerMain}>
                    <h2>Karl Bruder</h2>
                </div>
                <div className={heroStyles.heroInnerSub}>
                    <h2>American-born, Japan-based front-end developer.</h2>
                    <h3>React JS / CSS / JavaScript</h3>
                    <h3>Professionally fluent in Japanese</h3>
                </div>
                <div className={heroStyles.socialIconContainer}>
                    <a href="mailto:karl.j.bruder@gmail.com"><FontAwesomeIcon icon={faGoogle} className={heroStyles.socialIcon} /></a>
                    <a href="https://github.com/Karl-J-Bruder" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={heroStyles.socialIcon} /></a>
                    <a href="https://www.linkedin.com/in/karl-bruder-a0b1a11a9/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className={heroStyles.socialIcon} /></a>
                </div>
                <div className={heroStyles.heroButtonContainer}>
                    <a href="#projectCard1"><button className={heroStyles.projectsButton}>Projects</button></a>
                    <Link to="/resume"><button className={heroStyles.resumeButton}>Resume</button></Link>
                    <Link to="/about"><button className={heroStyles.aboutButton}>About Me</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;