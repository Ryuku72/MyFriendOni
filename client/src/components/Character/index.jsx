import React from "react";
import "./style.css";

function Character(props) {
switch(props.language){
    case "English":
    return <p className="kanji">{props.question.English}</p>    
    default: 
    return <p className="kanji">{props.question.Japanese}</p>  
}
}

export default Character;