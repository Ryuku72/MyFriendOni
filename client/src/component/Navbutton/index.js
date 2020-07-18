import React from "react";
import "./style.css";

function NavButton(props) {
return( 
<div className="mx-2 my-2">
<button className="bg-yellow-300 shadow-xl hover:bg-pink-600 hover:text-gray-200 rounded-lg capitalize text-gray-800 text-base outline-none" onClick={props.onClick}>
    <p className="p-6 w-48 h-10 flex justify-center items-center" > {props.menu} </p></button>
</div>
)}

export default NavButton