import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/BackgroundSection";

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        imgSrc={data.image.childImageSharp.fluid}
        title="Fast food"
        styleClass="default-background"
      />
    </Layout>
  );
};

export const query = graphql`
  {
    image: file(relativePath: { eq: "background-image.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default IndexPage;
