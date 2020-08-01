import React from "react";
import {  Link } from "react-router-dom";
import "./style.css";

function grade(input){
    let x = input
    if (x < 5){
        x = "F"
    } else if (x < 10 ){
        x = "D-" 
    } else if (x < 20 ){
        x = "D" 
    } else if (x < 25 ){
        x = "D+" 
    } else if (x < 30 ){
        x = "C-" 
    } else if (x < 35 ){
        x = "C" 
    } else if (x < 40 ){
        x = "C+" 
    } else if (x < 50 ){
        x = "B-" 
    } else if (x < 55 ){
        x = "B"
    } else if (x < 60 ){
        x = "B+"
    } else if (x < 65 ){
        x = "A-"
    } else if (x < 70 ){
        x = "A"
    } else {
        x = "A+"
    }
    return x;
}

function ScoreCard(props) {
    //console.log(props.wrong)
    //console.log(props.correct)
    const result = grade(props.score)

    return (
        <div className="score-sheet w-full h-full bg-yellow-300" style={props.style}>
            <div className="w-1/2 h-full inline-flex flex-col xl:leading-10 sm:leading-6">
                <div className="flex justify-center items-center" style={{height:"35%"}}>
        <p className="gradeText text-gray-800">Grade: </p>
        <p className="gradeLetter mx-6 text-red-500" style={{ transform: "rotateZ(-10deg)" }}>{result}</p>
        </div>
        <div className="flex flex-col px-6 text-gray-800" style={{height:"40%"}}>
        <div className="flex justify-between items-center px-4">
            <p className="scoreText">Date:</p>
            <p className="dataText">{props.date}</p>
            </div>
            <div className="flex justify-between items-center px-4 my-2">
        <p className="scoreText">Correct Answers:</p>
        <p className="dataText"> {props.correct.length} words</p>
        </div>

        <div className="flex justify-between items-center px-4 my-2">
        <p className="scoreText">Wrong Answers:</p>
        <p className="dataText">  {props.wrong.length} words</p>
        </div>

        <div className="flex justify-between items-center px-4 my-2">
            <p className="scoreText">Total Score:</p> 
            <p className="dataText">{props.score} points</p>
            </div>

        <div className="flex justify-between items-center px-4 my-2">
        <p className="scoreText">Highest Score:</p>
        <p className="dataText"> {props.highScore} points</p>
        </div>
        
        </div>
        <div className="flex items-center justify-center p-4" style={{height:"25%"}}>
        <Link to="/quiz" className="exitScoreBtn flex items-center justify-center rounded-lg shadow-xl text-gray-700 font-mono bg-blue-300 hover:bg-purple-400 border-2 border-indigo-400" onClick={props.click}>Exit</Link>
        </div>
            </div>

            <div className="block text-gray-400 p-10 w-1/2 text-2xl h-full bg-gray-800 overflow-y-auto capitalize">
            <p className="sloganText mb-3">Remember to keep studying...</p>
                <p className="answerText">Correct Answers :</p>
            <div className="w-full grid xl:grid-cols-3 sm:grid-cols-1 gap-4 mb-3">
        {props.correct.map((result, index) => (
        <p key={index} className="quizAnswers w-full h-full flex justify-center items-center text-center border border-gray-600 bg-green-600 text-white text-centre m-2 rounded-lg">{result}</p>
        ))}    
        </div>
        <p className="answerText">Wrong Answers :</p>
        <div className="w-full grid xl:grid-cols-3 sm:grid-cols-1 gap-4 mb-3">
        {props.wrong.map((result, index) => (
        <p key={index} className="flex quizAnswers items-center w-full h-full justify-center border border-gray-600 bg-red-600 text-white m-2 text-centre rounded-lg">{result}</p>
        ))}
        </div>
    </div>
    </div>
)
}

export default ScoreCard;