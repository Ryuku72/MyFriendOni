import React from "react";
import "./style.css";

const btnColor = {
    "true": "bg-green-300 hover:bg-green-600",
    "false": "bg-red-300 hover:bg-red-600",
  }

function Button(props) {
    const btnOutput = props.btnColor ? btnColor[props.value] : "bg-blue-300 hover:bg-indigo-600";
return( 
<div className="mx-2 my-2">
<button className={`btn border-gray-500 border rounded-lg p-6 w-64 h-24 flex justify-center items-center font-mono capitalize text-base text-gray-900 hover:text-gray-200 ${btnOutput}`} onClick={props.userInput} disabled={props.disable < 1} value={props.value}> {props.question}</button>
</div>
)}

export default Button