import React from 'react';
import projectsStyles from "./projectsStyles.module.scss";
import LifeStyle from "./projectCards/Lifestyle";
import SakeShop from "./projectCards/SakeShop";
import PortfolioSite from "./projectCards/Portfolio";

const Projects = () => {
    return (
        <div className={projectsStyles.container}>
            <h2 className={projectsStyles.title}>PROJECTS</h2>
            <LifeStyle />
            <SakeShop />
            <PortfolioSite />
        </div>
    )
}

export default Projects;