import React from "react";
import "./style.css";

function Stat(props) {
return <p className="mx-2 my-2 text-xl font-mono capitalize text-gray-500">{props.title}: {props.value}</p>
}

export default Stat;