import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import footerStyles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.socialContainer}>
                <a href="mailto:karl.j.bruder@gmail.com"><FontAwesomeIcon icon={faGoogle} className={footerStyles.socialIcon} /></a>
                <a href="https://github.com/Karl-J-Bruder" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={footerStyles.socialIcon} /></a>
                <a href="https://www.linkedin.com/in/karl-bruder-a0b1a11a9/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className={footerStyles.socialIcon} /></a>
            </div>
            <p>Created by {data.site.siteMetadata.author} (c) 2020</p>
            <p>Homepage Photo by <a href="https://unsplash.com/@roberto_j_saldana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">
                Roberto Jr Saldana</a> on
                <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer"> Unsplash</a>
            </p>
        </footer>
    )
}

export default Footer;