import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import karl2 from "./images/karl2.jpg";
import aboutStyles from "./about.module.scss";

const AboutPage = () => {
    return (
        <div className={aboutStyles.aboutContainer}>
            <Layout>
                <Head title="About" />
                <div className={aboutStyles.photoContainer}>
                    <h1>About Me</h1>
                    <img src={karl2} alt="me in upstate new york" className={aboutStyles.aboutPhoto} />
                </div>
                <div className={aboutStyles.textContainer}>
                    <p>Born in 1987 in Florida. Currently, I live in Yokohama and commute into south Tokyo.</p>
                    <p>Having grown up on 90's info-tainment, I have a lifelong love of learning and endless curiosity.</p>
                    <p> My current job as a Japanese translator allows me to indulge this passion for knowledge by presenting me with opportunities to study a wide range of subjects and work with people
                    from around the world--something I hope to continue to enjoy as I transition to web development.
                </p>
                    <p>
                        In my free time, I like to read (fiction and non-fiction), watch anime and play video games.
                        I'm also an avid hiker, and I take full advantage of the vast choice of mountains and trails the greater Tokyo region offers.
                </p>
                    <p>While you're here, please check out my <Link to="/portfolio" className={aboutStyles.inlineLink}>recent projects</Link>,
                 visit the <Link to="/FAQ" className={aboutStyles.inlineLink}>FAQ page</Link> to learn more about my professional background and goals,
                 or find out how to reach me on my <Link to="/contact" className={aboutStyles.inlineLink}>contact page</Link>
                    </p>
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage;