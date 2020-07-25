import React from "react";
import "./style.css";
import Character from "../Character";


function SearchCard(props){

    return (
    <div className="flex-col items-center rounded-lg mt-2 shadow-lg text-xl font-mono p-6 text-gray-900 searchCard bg-yellow-400" style={{...props.style}}>
        <p className="px-4">{JSON.parse(props.row) + 1}</p>
         <div className="p-3 capitalize flex justify-center items-center">
        <ul>
            <li><Character 
            language={props.language} 
            character={props.jpn} 
            /></li>
            <li className="text-center mt-3">{props.eng}</li>
        </ul>
      </div>
        </div>
    )
}

export default SearchCard