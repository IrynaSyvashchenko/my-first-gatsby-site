import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Projects = () => {
  return (
    <Layout pageTitle="Projects">
      <p>
        My projects
      </p>
    </Layout>
  );
};

// Rest of the component...

export const Head = () => <Seo title="Projects" />

export default Projects;
