import React from "react";
import "./style.css";

function Letter(props) {
return (
    <span style={{color:`${props.color}`}}>{props.value}</span>
)
}

export default Letter