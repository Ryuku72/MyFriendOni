import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper overflow-y-auto grid grid-cols-5 gap-3 p-4 mb-4" {...props} />;
}

export default Wrapper;
