import React from "react";
import clsx from "clsx";

const Spacer = ({ position = "top", size = "4" }) => {
  const marginClass = {
    top: `mt-${size}`,
    bottom: `mb-${size}`,
    left: `ml-${size}`,
    right: `mr-${size}`,
    x: `mx-${size}`,
    y: `my-${size}`,
    all: `m-${size}`,
  }[position];

  return <div className={clsx(marginClass)} />;
};

export default Spacer;
