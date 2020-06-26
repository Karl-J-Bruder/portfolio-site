import React from 'react';
import Layout from "../components/layout";
import Head from "../components/head";
import contactStyles from "./contact.module.scss";

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <div className={contactStyles.wrapper}>
                    <h1>Contact Me</h1>
                    <p>I can be reached via any of the following platforms:</p>
                    <ul>
                        <li>Email: karl.j.bruder@gmail.com</li>
                        <li>GitHub: <a href="https://github.com/Karl-J-Bruder" target="_blank" rel="noreferrer">Karl-J-Bruder</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/karl-bruder-a0b1a11a9/" target="_blank" rel="noreferrer">Karl Bruder</a></li>
                        <li>Wantedly（日本語）: <a href="https://www.wantedly.com/users/138073753" target="_blank" rel="noreferrer">ブルーダー・カール</a></li>
                    </ul>
                    <p>Thank you for your interest, and I hope to hear from you soon!</p>
                </div>
            </Layout>
        </div>
    )
}

export default ContactPage;