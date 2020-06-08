import React from 'react';
import Layout from "../components/layout";
import projectStyles from "./project.module.scss";

const Projects = () => {
    return (
        <Layout>
            <div>
                <h1>Projects</h1>
                <div className={projectStyles.wrapper}>
                    <div className={projectStyles.projectContainer}>
                        <h2>Sake Shop</h2>
                        <p>A mockup of an online shop specializing in sake.</p>
                        <p>Built with: </p>
                        <ul>
                            <li>React JS (hooks)</li>
                            <li>Styled Components</li>
                            <li>Stripe (for simulated shopping cart and payment screens)</li>
                        </ul>
                    </div>
                    <div className={projectStyles.projectContainer}>
                        <h2>Lifestyle App</h2>
                        <p>A simple collection of handy tools including a shopping list, to-do list, episode tracker for media you're currently watching and weather forecasts</p>
                        <p>Built with: </p>
                        <ul>
                            <li>React JS (hooks)</li>
                            <li>Firebase for authentication and database</li>
                            <li>Materialize CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Personal Website</h2>
                        <p>The site you're on now was built with: </p>
                        <ul>
                            <li>Gatsby JS</li>
                            <li>CSS Modules</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;