import React from "react";

const Section = ({ children, className, outerSectionClassName }) => {
  return (
    <section className={`px-5 pt-7.5 ${outerSectionClassName}`}>
      <div className={`max-w-325 w-full mx-auto ${className}`}>{children}</div>
    </section>
  );
};

export default Section;
