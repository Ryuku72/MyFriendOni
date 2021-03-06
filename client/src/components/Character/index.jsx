import React from "react";
import "./style.css";

function Character(props) {
  switch (props.language) {
    case "English":
      return <p className="engChar w-full capitalize">{props.question.English}</p>;
    case "Katakana":
      return <p className="furiChar w-full capitalize">{props.question.Katakana}</p>;
    case "Hiragana":
      return <p className="furiChar w-full capitalize">{props.question.Hiragana}</p>;
      case "Japanese":
    return <p className="jpnChar w-full">{props.question.Japanese}</p>;
    case "Vocab":
      return <p className="kanji2 text-center w-full capitalize">{props.character}</p>;
    case "Letters":
    return <span className="kanji2 mx-4 w-full capitalize">{props.character}</span>;
    default:
      return <p className="kanji w-full capitalize">Unknown</p>;
  }
}

export default Character;
