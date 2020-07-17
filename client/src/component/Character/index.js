import React from "react";
import "./style.css";

function Character(props) {
return (
    <p className="text-6xl">{props.question}</p>
)
}

export default Character;