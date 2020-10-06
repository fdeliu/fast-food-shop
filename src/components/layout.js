import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "./bootstrap.min.css";
import "./layout.css";

import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
