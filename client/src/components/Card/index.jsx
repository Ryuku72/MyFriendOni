import React from "react";
import "./style.css";
import Character from "../Character";
import Button from "../Button";
import close from "../../assets/svg/close.svg";
import QuizGif from "../QuizGif";

function Card(props) {
  let testLanguage = ""
  let hScore = ""
  //console.log(props.Eng)
  switch (props.language) {
    case "English":
        testLanguage = "English";
        hScore = props.engHighScore;
      break;
      case "Hiragana":
        testLanguage = "Hiragana";
        hScore = props.hiraHighScore;
      break;
      case "Katakana":
        testLanguage = "Katakana";
        hScore = props.kataHighScore;
      break;
    default:
        testLanguage = "Japanese";
        hScore = props.jpnHighScore;
      break;
  }
 
  let parentLanguage = ""
  return (
    <div
      className="w-full h-full text-4xl p-8 bg-gray-900 z-1"
      style={props.style}
    >
<div className="w-1/2 border border-red-500 h-full flex flex-col justify-between items-center relative">
{props.overlay ? <div id="startOverlay" className="w-full h-full flex flex-col items-center justify-center">
  <p className="quizTitle text-white underline">Quiz</p> 
  <p className="quizLang text-white">{ testLanguage }</p>
  <p className="quizHighScore text-white">High Score: { hScore }</p>
  </div> : "" }
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
        score={props.score}
        />
      </div>
</div> 
    </div>
  );
}

export default Card;
