import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/BackgroundSection";
import Info from "../components/info";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        imgSrc={data.image.childImageSharp.fluid}
        title="Fast food"
      />
      <Info imgSrc={data.image2.childImageSharp.fluid} />
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
    image2: file(relativePath: { eq: "our-story-image.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default IndexPage;
