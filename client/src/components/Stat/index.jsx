import React from "react";
import "./style.css";

function Stat(props) {
return <p className="stat mx-2 my-2 font-mono capitalize text-gray-500">{props.title}: {props.value}</p>
}

export default Stat;