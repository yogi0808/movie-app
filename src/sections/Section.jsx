import classNames from "classnames";
import React from "react";

const Section = ({ children, className, outerSectionClassName }) => {
  const outerSectionClassNames = classNames("md:px-5 pt-7.5", {
    [outerSectionClassName]: outerSectionClassName,
  });

  const innerDivClassNames = classNames("max-w-325 w-full mx-auto relative", {
    [classNames]: className,
  });

  return (
    <section className={outerSectionClassNames}>
      <div className={innerDivClassNames}>{children}</div>
    </section>
  );
};

export default Section;
