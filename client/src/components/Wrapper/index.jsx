import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="relative wrapper p-4 bg-gray-100 overflow-y-auto" {...props} style={{...props.wrap}} />;
}

export default Wrapper;
