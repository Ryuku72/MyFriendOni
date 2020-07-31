import React from "react";
import "./style.css";
import Character from "../Character";
import Button from "../Button";
import close from "../../assets/svg/close.svg";
import QuizGif from "../QuizGif";

function Card(props) {
  let parentLanguage = ""
  return (
    <div
      className="relative w-full h-full text-center items-center justify-center text-4xl p-8 bg-gray-900"
      style={props.style}
    >
<div className="w-1/2 border border-red-500 h-full flex flex-col justify-between items-center">
<p className="character mt-2">What does this mean?</p>
      <Character {...props} />
<div className="grid grid-cols-2 p-2">
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
              value={result.Correct}
              userInput={props.userInput}
              disable={props.disable}
              color={props.color}
              language={props.language}
            />
          );
        })}
      </div>


</div>
<div className="w-1/2">
 <div className="w-full h-full items-center justify-center flex">
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
        <QuizGif 
        gifState={props.gifState}
        btnColor={props.btnColor}
        />
      </div>

</div>












     
    </div>
  );
}

export default Card;
