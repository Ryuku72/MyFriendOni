import React from "react";
import "./style.css";

const btnColor = {
    "true": "bg-green-300 hover:bg-green-600",
    "false": "bg-red-300 hover:bg-red-600",
  }

function Button(props) {
    const btnOutput = props.btnColor ? btnColor[props.value] : "bg-blue-300 hover:bg-indigo-600";
    switch (props.language) {
      case "English":
       return( <div className="mx-2 my-2">
        <button tabIndex={props.index} className={`btnQuiz border-gray-500 border rounded-lg p-2 flex justify-center items-center font-mono capitalize text-gray-900 hover:text-gray-200 jpnWord ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value} name={props.value}>{props.question}</button>
        </div>
       )
      case "Katakana":
        return( <div className="mx-2 my-2">
        <button tabIndex={props.index} className={`btnQuiz border-gray-500 border rounded-lg p-2 flex justify-center items-center font-mono capitalize text-gray-900 hover:text-gray-200 furiWord ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value} name={props.value}>{props.question}</button>
        </div>
       )
      case "Hiragana":
          return( <div className="mx-2 my-2">
          <button tabIndex={props.index} className={`btnQuiz border-gray-500 border rounded-lg p-2 flex justify-center items-center font-mono capitalize text-gray-900 hover:text-gray-200 furiWord ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value} name={props.value}>{props.question}</button>
          </div>
         )
      default:
        return( <div className="mx-2 my-2">
        <button tabIndex={props.index} className={`btnQuiz border-gray-500 border rounded-lg p-2 flex justify-center items-center font-mono capitalize text-gray-900 hover:text-gray-200 engWord ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value} name={props.value}>{props.question}</button>
        </div>
       )
    };
}

export default Button