import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
const IconButton = ({ handleClick }) => {
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <RiDeleteBinLine />{" "}
    </button>
  );
};

export default IconButton;