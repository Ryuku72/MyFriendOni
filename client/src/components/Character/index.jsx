import React from "react";
import "./style.css";

function Character(props) {
return (
    <p className="kanji">{props.question}</p>
)
}

export default Character;