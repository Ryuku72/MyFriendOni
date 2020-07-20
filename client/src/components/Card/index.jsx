import React from "react";
import "./style.css";
import Character from "../Character";
import Button from "../Button";
import Oni from '../../assets/img/onilogin.png'

function Card(props) {
return (
    <div className="w-3/4 h-full text-center flex-col items-center justify-center text-4xl p-8" style={props.style}>
        <p className="character">What does this mean?</p>
        <Character {...props} />
        <div className="w-full items-center justify-center flex">
        <img src={Oni} alt="Oni" className="w-1/4 m-1"/>        
        </div>
    <div className="flex items-center justify-center p-2">
        {props.answer.map(result => (
            //console.log(result),
        <Button question={result.English} btnColor={props.btnColor} key={result.Row} value={result.Correct} userInput={props.userInput} disble={props.disbale} color={props.color}/>
        ))}
        </div>
    </div>
)
}

export default Card;