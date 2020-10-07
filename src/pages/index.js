import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/BackgroundSection";
import Info from "../components/info";
import Menu from "../components/menu";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        imgSrc={data.image.childImageSharp.fluid}
        title="Fast food"
      />
      <Info imgSrc={data.image2.childImageSharp.fluid} />
      <Menu menu={data.menu.nodes} />
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
    image2: file(relativePath: { eq: "our-story-img.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulFastFood {
      nodes {
        category
        id
        name
        image {
          title
          fixed(width: 300, height: 300) {
            src
          }
        }
        price
        descrption {
          content {
            content {
              value
            }
          }
        }
      }
      totalCount
    }
  }
`;
export default IndexPage;
