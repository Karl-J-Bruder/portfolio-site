import React from 'react';
import Hero from "../components/hero";
import Projects from "../components/projects";
import Head from "../components/head";

const Home = () => {
    return (
        <div>
            <Head title="Home" />
            <Hero />
            <Projects />
        </div>
    )
}

export default Home;