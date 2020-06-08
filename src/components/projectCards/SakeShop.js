import React from 'react';
import cardStyles from "./projectCardStyles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons"

const SakeShop = () => {
    return (
        <div className={cardStyles.projectCard}>
            <div className={cardStyles.cardInner}>
                <div className={cardStyles.imageContainer}>
                    <img className={cardStyles.cardImage} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photolakedistrict.co.uk%2Fwp-content%2Fuploads%2F2016%2F11%2Ffleetwith-pike-photographs.jpg&f=1&nofb=1" alt="ayyLMAO" />
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
                    <button className={cardStyles.githubButton}>GitHub <FontAwesomeIcon icon={faGithub} /></button>
                    <button className={cardStyles.liveSiteButton}>Live Site <FontAwesomeIcon icon={faHandPointRight} /></button>
                </div>
            </div>
        </div>
    )
};

export default SakeShop;