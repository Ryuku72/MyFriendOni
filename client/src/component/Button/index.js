import React from "react";
import "./style.css";

function Button(props) {
return( 
<div className="mx-2 my-2">
<button className="bg-blue-300 border-gray-500 border rounded-lg capitalize font-thin text-base"><p className="p-6 w-64 h-24 flex justify-center items-center"> {props.question} </p></button>
</div>
)}

export default Button