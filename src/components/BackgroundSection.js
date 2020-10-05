import React from "react";
import BackgroundImage from "gatsby-background-image";

function BackgroundSection({
  imgSrc,
  styleClass = "default-background",
  title = "default title",
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={imgSrc}>
      <h1 className="text-yellow text-center display-4 text-uppercase title">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  );
}

export default BackgroundSection;
