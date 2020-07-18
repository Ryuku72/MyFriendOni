import React from "react";
import "./style.css";
import Character from "../Character";
import Button from "../Button";
import Oni from '../../assets/img/onilogin.png'

function Card(props) {
return (
    <div className="character text-center text-4xl">
        <p>What does this mean?</p>
        <Character {...props} />
        <div className="w-full flex items-center justify-center">
        <img src={Oni} alt="Oni" className="w-1/4 m-6"/>        
        </div>
    <div className="flex items-center justify-center">
        <Button question={props.answer1} userInput={props.userInput} />
        <Button question={props.answer2} userInput={props.userInput} />
        <Button question={props.answer3} userInput={props.userInput} />
        <Button question={props.answer4} userInput={props.userInput} />
    </div>
    </div>
)
}

export default Card;