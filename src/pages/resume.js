import React from 'react';
import Layout from "../components/layout";
import Head from "../components/head";
import { Link } from "gatsby";
import resumeStyles from "./resume.module.scss";

const Resume = () => {
    return (
        <Layout>
            <Head title="Resume" />
            <div id="top" className={resumeStyles.wrapper}>
                <div>
                    <h1 id="resume-top">Resume</h1>
                    <p>This page contains an online version of my resume. If you'd like a PDF version,<Link to="/contact"> please contact me</Link></p>
                </div>
                <div>
                    <div>
                        <h2>Karl Bruder</h2>
                        <p>080-8206-0598 ● karl.j.bruder@gmail.com</p>
                    </div>
                    <div>
                        <strong>Seeking a position as a front-end developer</strong>
                        <p>Translating designs and objectives into front-end code, communicating effectively with clients</p>
                        <div>
                            <strong>Objective:</strong>
                            <p>To use my over 4 years of experience as a Japanese-English translator and bring a unique perspective and skillset to your company as a junior front-end developer. In addition to my full fluency in Japanese and experience working with cross-department and worldwide teams, as a translator, I have honed my ability to quickly learn detailed information about a wide variety of subjects and how to approach problems and decisions from multiple angles.
                            I am a front-end developer with approximately 2 years of programming experience.
                </p>
                        </div>
                    </div>
                    <div>
                        <p>Key development skills include:</p>
                        <ul>
                            <li> HTML 5</li>
                            <li> CSS 3 incl. SASS, CSS Modules, Styled Components and frameworks (Materialize, etc.) </li>
                            <li> JavaScript</li>
                            <li> React JS + Hooks</li>
                            <li> Responsive design</li>
                        </ul>
                    </div>
                    <div>
                        <p>Valuable skills from my current profession:</p>
                        <ul>
                            <li> Management of multiple projects at once, both in a team and on my own</li>
                            <li> Passion for learning more about concepts and improving my abilities</li>
                            <li> Skilled at finding reliable sources of information to determine the most accurate translation</li>
                            <li> Quick thinking through handling interpretation tasks and media interviews</li>
                            <li> Can effectively communicate with teams from various cultural and professional backgrounds</li>
                        </ul>
                    </div>
                    <div>
                        <h2>PROFESSIONAL EXPERIENCE</h2>
                        <ul>
                            <li><p>Canon Inc. (February 2017-Present) Tokyo</p>
                                <ul>
                                    <li> Translation of technical and promotional materials relating to products in the following fields: Optics (cameras & lenses), commercial printing, diagnostic imaging, semiconductor lithography, financial reporting, business & sales, art & history.</li>
                                    <li> Interpreting for English-speaking media tours and interviews</li>
                                </ul>
                            </li>
                            <li>
                                <p><p>Ishida Taiseisha Inc. (December 2014-February 2017) Tokyo</p></p>
                                <ul>
                                    <li> Technical translation and proofreading for operation manuals, etc. intended for use with multifunction printers and workflow software produced by a worldwide electronics maker.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong>Interac Inc. (March - November 2014) Sendai, Miyagi Pref.</strong>
                        <ul>
                            <li>Assistant Language Teacher (ALT)</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Joytalk Inc. (March 2013-February 2014) Hiraizumi, Iwate Pref.</strong>
                        <ul>
                            <li>Assistant Language Teacher (ALT)</li>
                        </ul>
                    </div>
                    <div>
                        <strong>MO Group International (August-November 2012) Brussels, Belgium</strong>
                        <ul>
                            <li>Japanese-English translation</li>
                        </ul>
                    </div>
                    <div>
                        <h2>EDUCATION & CREDENTIALS</h2>
                        <ul>
                            <li>University of Central Florida (Orlando, FL) & Florida State University (Tallahassee, FL)</li>
                            <li>Bachelors of Science in Asian Studies (emphasis on Japanese language) 2011</li>
                        </ul>
                    </div>
                    <ul>
                        <li>Miyagi University of Education (宮城教育大学) in Sendai, Japan</li>
                        <li>1-year exchange student program with intensive education in the Japanese language</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>City University London (London, U.K.)</li>
                        <li>Masters in Translating Popular Culture (2012) (e.g. Modern literature, film & television, video games)</li>
                        <li>Masters' thesis subject: the history and criteria for use of Japanese honorifics in translated media</li>
                    </ul>
                </div>
                <div>
                    <h2>CERTIFICATIONS</h2>
                    <p>Japanese Language Proficiency Test (JLPT): N1 Certfication (Received in 2014)</p>
                </div>
            </div>
        </Layout>
    );
};

export default Resume;