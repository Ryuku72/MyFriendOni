import React from "react";
import "./style.css";
import Character from "../Character";
import Button from "../Button";
import Oni from "../../assets/img/onilogin.png";
import close from "../../assets/svg/close.svg";

function Card(props) {
  let parentLanguage = ""
  return (
    <div
      className="relative w-3/4 h-full text-center flex-col items-center justify-center text-4xl p-8"
      style={props.style}
    >
      <p className="character mt-2">What does this mean?</p>
      <Character {...props} />
      <div className="w-full items-center justify-center flex">
        <button
          className="outline-none focus:outline-none"
          onClick={props.exitQuiz}
        >
          <img
            src={close}
            alt="Close"
            className="absolute inline-block h-12 w-12 mt-2 fill-current hover:text-black"
            style={{ top: "2%", right: "5%" }}
          />
        </button>
        <img src={Oni} alt="Oni" className="w-1/4 m-1" />
      </div>
      <div className="flex items-center justify-center p-2">
        {props.answer.map((result, index) => {
          switch (props.language) {
            case "English":
                parentLanguage = "Japanese";
              break;
              case "Hiragana":
                parentLanguage = "Romaji";
              break;
              case "Katakana":
                parentLanguage = "Romaji";
              break;
            default:
                parentLanguage = "English";
              break;
          }
          return (
            <Button
              question={result[parentLanguage]}
              btnColor={props.btnColor}
              key={index}
              value={result['Correct']}
              userInput={props.userInput}
              disable={props.disable}
              color={props.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Card;