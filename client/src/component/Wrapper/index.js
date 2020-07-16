import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className={`wrapper block p-4 ${props.value}`} {...props} />;
}

export default Wrapper;
