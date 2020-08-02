import React, { useState, useEffect} from "react";
import "./style.css";
import correctGif1 from "../../assets/img/gifs/correct01.gif";
import correctGif2 from "../../assets/img/gifs/correct02.gif";
import correctGif3 from "../../assets/img/gifs/correct03.gif";
import waitingGif1 from "../../assets/img/gifs/waiting01.gif";
import waitingGif2 from "../../assets/img/gifs/waiting02.gif";
import wrongGif1 from "../../assets/img/gifs/wrong01.gif";
import wrongGif2 from "../../assets/img/gifs/wrong02.gif";
import wrongGif3 from "../../assets/img/gifs/wrong03.gif";
import byeGif from "../../assets/img/gifs/bye.gif"

const correctArray = [correctGif1, correctGif2, correctGif3 ];
const waitArray = [waitingGif1, waitingGif2];
const wrongArray = [wrongGif1, wrongGif2, wrongGif3 ];

function QuizGif(props) {

    const [correctGif, setCorrectGif] = useState()
    const [wrongGif, setWrongGif] = useState()
    const [waitGif, setWaitGif] = useState()

    const wordType = {
        "true": "CORRECT",
        "false": "WRONG!"
    }

    const cardType = {
        "true": correctGif,
        "false": wrongGif,
        "": byeGif
    }

    useEffect(()=> {
        function randomNumber(array){
            return Math.floor( Math.random() * array.length)
        }
        let truePic = correctArray[`${randomNumber(correctArray)}`];
        let falsePic = wrongArray[`${randomNumber(wrongArray)}`];
        let waitPic = waitArray[`${randomNumber(waitArray)}`];
        setCorrectGif(truePic);
        setWrongGif(falsePic);
        setWaitGif(waitPic);
    },[props.btnColor])

    //console.log(props.gifState)

   // console.log(props.btnColor)
    const imgGif = props.btnColor ? cardType[props.gifState] : waitGif;
    const answerTag = props.btnColor ? wordType[props.gifState] : "";
    //console.log(imgGif)
    //console.log(props.gifState)
    return (
        <div className="quizGifBox flex flex-col justify-center items-center"> 
    <img className="gifBox" src={imgGif} alt="answerGif"/>
    <p className="textAnswer flex flex-col justify-center items-center text-white">{answerTag}</p>
    </div>
    )
}

export default QuizGif;