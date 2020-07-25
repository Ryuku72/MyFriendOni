import React from "react";
import "./style.css";

function Character(props) {
  switch (props.language) {
    case "English":
      return <p className="kanji">{props.question.English}</p>;
    case "Katakana":
      return <p className="kanji">{props.question.Katakana}</p>;
    case "Hiragana":
      return <p className="kanji">{props.question.Hiragana}</p>;
      case "Japanese":
    return <p className="kanji">{props.question.Japanese}</p>;
    case "Vocab":
      return <p className="kanji2 text-center">{props.character}</p>;
    case "Letters":
    return <p className="kanji2 mx-8">{props.character}</p>;
    default:
      return <p className="kanji">Unknown</p>;
  }
}

export default Character;
