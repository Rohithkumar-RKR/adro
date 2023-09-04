import React from "react";

const Section = ({ children, className }) => {
  return <section className={`py-5 ${className}`}>{children}</section>;
};

export default Section;
