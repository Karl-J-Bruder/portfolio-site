import React from 'react';
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favIcon from "../favIcon.png";

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} link={[
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favIcon}` }
        ]} />
    )
}

export default Head;