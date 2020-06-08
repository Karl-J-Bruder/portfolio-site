import React from 'react';
import cardStyles from "./projectCardStyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import portfolio from "../../img/portfolio.png";

const PortfolioSite = () => {
    return (
        <div className={cardStyles.projectCard}>
            <div className={cardStyles.cardInner}>
                <div className={cardStyles.imageContainer}>
                    <img className={cardStyles.cardImage} src={portfolio} alt="portfolio site" />
                </div>
                <div className={cardStyles.descContainer}>
                    <p className={cardStyles.projectTitle}>Portfolio Site</p>
                    <p className={cardStyles.projectDesc}>The site you're currently viewing</p>
                    <ul className={cardStyles.toolsList}>
                        <strong>Built with:</strong>
                        <li>Gatsby JS</li>
                        <li>CSS Modules</li>
                    </ul>
                </div>
                <div className={cardStyles.buttonContainer}>
                    <button className={cardStyles.githubButton}>GitHub <FontAwesomeIcon icon={faGithub} /></button>
                    <button className={cardStyles.liveSiteButton}>Live Site <FontAwesomeIcon icon={faHandPointRight} /></button>
                </div>
            </div>
        </div>
    )
};

export default PortfolioSite;