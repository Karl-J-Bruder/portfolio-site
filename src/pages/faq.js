import React from 'react';
import Layout from "../components/layout";
import Head from "../components/head";
import { Link } from "gatsby";
import faqStyles from "./faq.module.scss";

const FAQ = () => {
    return (
        <Layout>
            <Head title="FAQ" />
            <div className={faqStyles.wrapper} id="top">
                <div>
                    <h1 id="faq-top">FAQ</h1>
                    <p>I know you're busy, so I hope to save you some time by putting together this list of questions you might have about my current job and career goals.</p>
                    <p>If you have any questions that aren't addressed here, please feel free to <Link to="/contact" className={faqStyles.inlineLink}>contact me</Link>.</p>
                </div>
                <ul>
                    <li><a className={faqStyles.navLink} href="#history">Education and Employment History</a></li>
                    <li><a className={faqStyles.navLink} href="#current">Current Job</a></li>
                    <li><a className={faqStyles.navLink} href="#looking">What I am Looking For</a></li>
                    <li><a className={faqStyles.navLink} href="#change">Why Have I Decided to Change Career Paths?</a></li>
                    <li><a className={faqStyles.navLink} href="#contribute">How I can Contribute to Your Company</a></li>
                    <li><a className={faqStyles.navLink} href="#salary">Current and Expected Salary</a></li>
                    <li><a className={faqStyles.navLink} href="#visa">Visa Status</a></li>
                    <li><a className={faqStyles.navLink} href="#japanese">Japanese Level</a></li>
                    <li><a className={faqStyles.navLink} href="#notice">Notice Period</a></li>
                </ul>
                <div className={faqStyles.faqItem}>
                    <h2 id="history">Education and Employment History</h2>
                    <ul>
                        <li><strong>College</strong> B.S. in Asian Studies</li>
                        <ul>
                            <li>2006-2008: University of Central Florida</li>
                            <li>(Transfer) 2008-2010: Florida State University</li>
                            <li>2009-2010: Exchange student at the Miyagi University of Education (宮城教育大学) in Sendai, Japan</li>
                        </ul>
                        <li><strong>Graduate School</strong> Masters in Translating Popular Culture <p>e.g. Modern literature, film &amp; television, video games</p></li>
                        <ul>
                            <li>2011-2012 City University London</li>
                            <li>Masters' thesis: History and criteria for use of Japanese honorifics in translated media</li>
                        </ul>
                        <li><strong>Employment history</strong></li>
                        <ul>
                            <li>
                                Canon Inc. (February 2017 - Present), Tokyo
                            <ul>
                                    <li>Translation of technical and promotional materials relating to products in the following fields: Optics (cameras &amp; lenses), commercial printing, diagnostic imaging, semiconductor lithography, financial reporting, business &amp; sales, art &amp; history</li>
                                    <li>Interpreting for English-speaking media tours and interviews</li>
                                </ul>
                            </li>
                            <li>Ishida Taiseisha Inc. (ITP) (December 2014 - January 2017), Tokyo
                            <ul>
                                    <li>Technical translation and proofreading for operation manuals, etc. intended for use with multifunction printers and workflow software produced by a worldwide electronics maker. </li>
                                </ul>
                            </li>
                            <li>
                                Interac Inc. (March - November 2014), Sendai, Miyagi Pref.
                            <ul>Assistant Language Teacher (ALT)</ul>
                            </li>
                            <li>
                                Joytalk Inc. (March 2013 - February 2014), Hiraizumi, Iwate Pref.
                            <ul>Assistant Language Teacher (ALT)</ul>
                            </li>
                            <li>MO Group International (August - November 2012) Brussels, Belgium
                            <ul>Japanese-English translation</ul>
                            </li>
                        </ul>
                    </ul>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
                <div className={faqStyles.faqItem}>
                    <h2 id="current">Current Job</h2>
                    <p>I am currently employed at Canon Inc., a Japan-based, globally active manufacturer of such products as cameras &amp; lenses, commercial, office and home printers, medical diagnostic equipment and semiconductor lithography equipment.</p>
                    <p>Outside of translation work itself, I work and communicate almost entirely in Japanese. In addition, I communicate and coordinate work in English with employees in overseas offices (NA, EMEA, SEA, etc.).</p>
                    <p>Working for a company that is constantly on the cutting edge of technological advancement, my job requires that I develop a wide-ranging foundation of knowledge on various technical subjects in both Japanese and English, and be able to communicate with industry professionals and the genral public in both languages.</p>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
                <div className={faqStyles.faqItem}>
                    <h2 id="looking">What I am Looking For</h2>
                    <p>I am seeking a position as a <strong>junior-level front-end developer</strong>. In this position, I hope to reinforce my fundamental skills while learning new technologies and taking on additional challenges and responsibilities.</p>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
                <div className={faqStyles.faqItem}>
                    <h2 id="change">Why Have I Decided to Change Career Paths?</h2>
                    <p>I am fascinated by language, linguistics and culture, and working as a professional translator has enabled me to pursue this intererest while meeting people from around the world. In addition, through this work I have been able to satisfy my wide-ranging curiosity about science, history and the arts.</p>
                    <p>However, today's world is becoming increasingly technology-focused, and this change is ocurring at an ever more rapid pace.</p>
                    <p>With the encouragement of friends in the industry, I began to study programming, and eventually settled on front-end development as an exciting and promising career path.</p>
                    <p>I've found programming and development to be a great fit for me. Much like spoken languages, the language of programming is diverse and constantly changing, aspects which I find fascinating.
                    In addition, programming allows me to work with diverse teams from various countries and cultures, coming together to build things for people and organizations from all walks of life.
                    At the same time, web development is becoming an increasingly important and in-demand skill that I feel will only become more valuable in the future.
                </p>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
                <div className={faqStyles.faqItem}>
                    <h2 id="contribute">How I can Contribute to Your Company</h2>
                    <ul>
                        <li>Building web applications using React JS, including Single Page Applications (SPA) and Server Side Render (SSR) applications.</li>
                        <li>CSS, including pre-processors (SASS), CSS modules, Styled Components and Materialize</li>
                        <li>Professional-level fluency in Japanese, and ability to facilitate communication between teams in different departments and fields</li>
                    </ul>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
                <div className={faqStyles.faqItem}>
                    <h2 id="salary">Current and Expected Salary</h2>
                    <p>I am more concerned with getting to know you and your organization, and deciding whether we are a mutual fit. I am confident that you are offering a salary that is competitive in the current market.</p>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
                <div className={faqStyles.faqItem}>
                    <h2 id="visa">Visa Status</h2>
                    <p>I currently possess a visa for <strong>Engineer/Specialist in Humanities/Int'l Services</strong> that is valid until November 2022.</p>
                    <p>Joining your organization may require a change of classification, but this is a minor procedure that does not require significant paperwork.</p>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
                <div className={faqStyles.faqItem}>
                    <h2 id="japanese">Japanese Level</h2>
                    <p>As a professional translator who has lived and worked in Japan for more than eight years, I am confident in my Japanese language abilities. I earned JLPT N1 certification in 2014.</p>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
                <div className={faqStyles.faqItem}>
                    <h2 id="notice">Notice Period</h2>
                    <p>In order to facilitate a smooth transition for my current employer, I would like to provide <strong>one month</strong>'s notice of my departure.</p>
                    <a className={faqStyles.navLink} href="#faq-top">Page Top</a>
                </div>
            </div>
        </Layout>
    );
};

export default FAQ;