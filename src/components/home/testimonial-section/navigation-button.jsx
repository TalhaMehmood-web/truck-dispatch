import React from "react";

const CarouselNavigationButton = ({ children, ref }) => {
  return (
    <button
      ref={ref}
      className="bg-black/30 text-white p-3 cursor-pointer rounded-full shadow-lg hover:bg-black/40 transition"
    >
      {children}
    </button>
  );
};

export default CarouselNavigationButton;
