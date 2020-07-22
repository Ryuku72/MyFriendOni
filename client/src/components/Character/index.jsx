import React from "react";
import "./style.css";

function Character(props) {
  switch (props.language) {
    case "English":
      return <p key={props.key} className="kanji">{props.question.English}</p>;
    case "Katakana":
      return <p key={props.key} className="kanji">{props.question.Katakana}</p>;
    case "Hiragana":
      return <p key={props.key} className="kanji">{props.question.Hiragana}</p>;
    default:
      return <p key={props.key} className="kanji">{props.question.Japanese}</p>;
  }
}

export default Character;
