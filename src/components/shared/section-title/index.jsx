import React from "react";
import clsx from "clsx";
const SectionTitle = ({ text, className }) => {
  return (
    <h2 className={clsx("text-5xl  font-bold  text-center", className)}>
      {text}
    </h2>
  );
};

export default SectionTitle;
