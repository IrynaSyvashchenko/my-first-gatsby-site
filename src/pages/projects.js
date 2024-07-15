import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Link } from "gatsby";

const Projects = () => {
  return (
    <Layout pageTitle="Projects">
      <p>My projects</p>
      <Link to="https://stircocktail.art/home">
        <p>Website for Bombay brand</p>
      </Link>
      <StaticImage alt="projects" src="../images/Screenshot_42.png" />
      <Link to="https://portfolio.migracode.org/projects">
        <p>MigraCode projects</p>
      </Link>
      <StaticImage alt="projects" src="../images/Screenshot_50.png" />

      <Link to="https://dulcet-cannoli-47f5bf.netlify.app/">
        <p>Site with API</p>
      </Link>
      <StaticImage alt="projects" src="../images/Screenshot_40.png" />
      <Link to="https://coruscating-queijadas-5cefbf.netlify.app/">
        <p>Site Rick and Morty</p>
      </Link>
      <StaticImage alt="projects" src="../images/Screenshot_41.png" />
    </Layout>
  );
};

// Rest of the component...

export const Head = () => <Seo title="Projects" />

export default Projects;
