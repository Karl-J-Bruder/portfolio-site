import React from 'react';
import cardStyles from "./projectCardStyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons"
import sake from "../../img/sake.png";

const SakeShop = () => {
    return (
        <div className={cardStyles.projectCard}>
            <div className={cardStyles.cardInner}>
                <div className={cardStyles.imageContainer}>
                    <img className={cardStyles.cardImage} src={sake} />
                </div>
                <div className={cardStyles.descContainer}>
                    <p className={cardStyles.projectTitle}>Sake Shop</p>
                    <p className={cardStyles.projectDesc}>Mock-up of an online store.</p>
                    <ul className={cardStyles.toolsList}>
                        <strong>Built with:</strong>
                        <li>React JS</li>
                        <li>Styled Components</li>
                        <li>Stripe (cart & payment simulation)</li>
                    </ul>
                </div>
                <div className={cardStyles.buttonContainer}>
                    <a href="https://github.com/Karl-J-Bruder/online-shop" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className={cardStyles.githubButton}>GitHub <FontAwesomeIcon icon={faGithub} /></button> </a>
                    <a href="https://nervous-mestorf-64ded5.netlify.app/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><button className={cardStyles.liveSiteButton}>Live Site <FontAwesomeIcon icon={faHandPointRight} /></button></a>
                </div>
            </div>
        </div>
    )
};

export default SakeShop;