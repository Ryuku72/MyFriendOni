import React from "react";
import "./style.css";

const btnColor = {
    "true": "btnCorrect",
    "false": "btnWrong",
  }

function Button(props) {
    const btnOutput = props.btnColor ? btnColor[props.value] : "btnIdle";
    switch (props.language) {
      case "English":
       return( <div className="mx-2 my-2">
        <button className={`btn border-gray-500 border rounded-lg p-2 flex justify-center items-center font-mono capitalize jpnWord ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value} name={props.value}>{props.question}</button>
        </div>
       )
      case "Katakana":
        return( <div className="mx-2 my-2">
        <button className={`btn border-gray-500 border rounded-lg p-2 flex justify-center items-center font-mono capitalize furiWord ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value} name={props.value}>{props.question}</button>
        </div>
       )
      case "Hiragana":
          return( <div className="mx-2 my-2">
          <button className={`btn border-gray-500 border rounded-lg p-2 flex justify-center items-center font-mono capitalize furiWord ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value} name={props.value}>{props.question}</button>
          </div>
         )
      default:
        return( <div className="mx-2 my-2">
        <button className={`btn border-gray-500 border rounded-lg p-2 flex justify-center items-center font-mono capitalize engWord ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value} name={props.value}>{props.question}</button>
        </div>
       )
    };
}

export default Button