import React from "react";
import BackgroundImage from "gatsby-background-image";

function BackgroundSection({ imgSrc, title = "default title", children }) {
  return (
    <BackgroundImage className="default-background" fluid={imgSrc}>
      <h1 className="text-center display-4 text-uppercase title">{title}</h1>
      <h4 className="text-center">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel amet
        labore tempore delectus voluptate inventore? Iste tempore molestias
        eaque rem quis blanditiis, facilis excepturi, magnam
      </h4>
      {children}
    </BackgroundImage>
  );
}

export default BackgroundSection;
