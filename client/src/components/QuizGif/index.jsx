import React, { setState } from "react";
import "./style.css";
import correctGif1 from "../../assets/img/gifs/correct01.gif";
import correctGif2 from "../../assets/img/gifs/correct02.gif";
import correctGif3 from "../../assets/img/gifs/correct03.gif";
import waitingGif from "../../assets/img/gifs/waiting02.gif"
import wrongGif1 from "../../assets/img/gifs/wrong01.gif"
import wrongGif2 from "../../assets/img/gifs/wrong02.gif"
import wrongGif3 from "../../assets/img/gifs/wrong03.gif"

const correctArray = [correctGif1, correctGif2, correctGif3 ];
const waitingArray = [waitingGif];
const wrongArray = [wrongGif1, wrongGif2, wrongGif3 ];

function QuizGif(props) {
    function randomNumber(array){
        return Math.floor( Math.random() * array.length)
    }
    const cardType = {
        "true": correctArray[`${randomNumber(correctArray)}`],
        "false": wrongArray[`${randomNumber(wrongArray)}`]
      }

    const wordType = {
        "true": "Correct",
        "false": "Wrong"
    }

    console.log(randomNumber(wrongArray))
    const imgGif = props.btnColor ? cardType[props.gifState] : waitingArray;
    const answerTag = props.btnColor ? wordType[props.gifState] : "";
    return (
        <div className="w-full flex flex-col justify-center items-center"> 
    <img src={imgGif} alt="answerGif"/>
    <p className="w-full text-white text-4xl">{answerTag}</p>
    </div>
    )
}

export default QuizGif;