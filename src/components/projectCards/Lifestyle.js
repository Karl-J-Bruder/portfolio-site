import React from 'react';
import cardStyles from "./projectCardStyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons"
import lifestyle from "../../img/lifestyle.png";

const Lifestyle = () => {
    return (
        <div className={cardStyles.projectCard}>
            <div className={cardStyles.cardInner} id="projectCard1">
                <div className={cardStyles.imageContainer}>
                    <img className={cardStyles.cardImage} src={lifestyle} />
                </div>
                <div className={cardStyles.descContainer}>
                    <p className={cardStyles.projectTitle}>Lifestyle App</p>
                    <p className={cardStyles.projectDesc}>A simple app for everyday tasks.</p>
                    <ul className={cardStyles.toolsList}>
                        <strong>Built with:</strong>
                        <li>React JS</li>
                        <li>Materialize CSS</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className={cardStyles.buttonContainer}>
                    <a href="https://github.com/Karl-J-Bruder/lifestyle-app" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className={cardStyles.githubButton}>GitHub <FontAwesomeIcon icon={faGithub} /></button></a>
                    <a href="https://festive-kirch-120553.netlify.app/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className={cardStyles.liveSiteButton}>Live Site <FontAwesomeIcon icon={faHandPointRight} /></button></a>
                </div>
            </div>
        </div>
    )
};

export default Lifestyle;