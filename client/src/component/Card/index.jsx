import React from "react";
import "./style.css";
import Character from "../Character";
import Button from "../Button";
import Oni from '../../assets/img/onilogin.png'

function Card(props) {
return (
    <div className="text-center text-4xl p-8" style={props.style}>
        <p className="character">What does this mean?</p>
        <Character {...props} />
        <div className="w-full items-center justify-center flex">
        <img src={Oni} alt="Oni" className="w-1/5 m-2"/>        
        </div>
    <div className="flex items-center justify-center">
        <Button question={props.answer1} userInput={props.userInput} ref={props.ref}/>
        <Button question={props.answer2} userInput={props.userInput} ref={props.ref}/>
        <Button question={props.answer3} userInput={props.userInput} ref={props.ref}/>
        <Button question={props.answer4} userInput={props.userInput} />
    </div>
    </div>
)
}

export default Card;