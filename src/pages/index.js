import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
// console.log("process.env.CONTENTFUL_SPACE_ID", process.env.CONTENTFUL_SPACE_ID)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog/">Blog</Link>
    <p />
    <Link to="/page-2/">Go to page 2</Link>
    <p />
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
);

export default IndexPage;
