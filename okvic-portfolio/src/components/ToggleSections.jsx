import { useState } from "react";

const ToggleSections = ({ onToggle, isOpen }) => {
  return (
    <button
      className="fixed top-5 right-5 px-4 py-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition z-9999 cursor-pointer"
      onClick={onToggle}
      style={{
        padding: "12px",
      }}
    >
      {isOpen ? "Close" : "Open"} Sections
    </button>
  );
};

export default ToggleSections;
