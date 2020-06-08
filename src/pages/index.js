import React from 'react';
import Layout from "../components/layout";
import Home from "./home";

//@@@ Link for optimizing page loads, <a> for external pages

const IndexPage = () => {

    return (
        <Layout>
            <Home />
        </Layout>
    )
}

export default IndexPage;