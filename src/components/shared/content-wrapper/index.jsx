import React from "react";
import clsx from "clsx";

const ContentWrapper = ({ children, className }) => {
  return (
    <div className={clsx(className, "max-w-5xl mx-auto container")}>
      {children}
    </div>
  );
};

export default ContentWrapper;
