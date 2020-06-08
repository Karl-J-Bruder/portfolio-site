import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import headerStyles from "./header.module.scss";

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <header className={headerStyles.header}>
            <h1 id="top"><Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About Me</Link></li>
                    <li><Link to="/faq" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>FAQ</Link></li>
                    <li><Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;