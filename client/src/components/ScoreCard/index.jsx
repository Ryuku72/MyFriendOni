import React from "react";
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

    const result = grade(props.score)

    return (
        <div className="score-sheet w-full h-full bg-yellow-300" style={props.style}>
            <div className="w-1/2 h-full inline-flex flex-col leading-10">
                <div className="flex justify-center items-center" style={{height:"35%"}}>
        <p className="text-6xl text-gray-800">Grade: </p>
        <p className="mx-6 text-red-500" style={{fontSize:"15rem", transform: "rotateZ(-10deg)" }}>{result}</p>
        </div>
        <div className="flex flex-col px-6 text-gray-800" style={{height:"40%"}}>
        <div className="flex justify-between items-center px-4">
            <p className="text-4xl">Date:</p>
            <p className="text-6xl">{props.date}</p>
            </div>
            <div className="flex justify-between items-center px-4 my-2">
        <p className="text-4xl">Correct Answers:</p>
        <p className="text-6xl"> {props.correct.length} words</p>
        </div>

        <div className="flex justify-between items-center px-4 my-2">
        <p className="text-4xl">Wrong Answers:</p>
        <p className="text-6xl">  {props.wrong.length} words</p>
        </div>

        <div className="flex justify-between items-center px-4 my-2">
            <p className="text-4xl">Total Score:</p> 
            <p className="text-6xl">{props.score} points</p>
            </div>

        <div className="flex justify-between items-center px-4 my-2">
        <p className="text-4xl">Highest Score:</p>
        <p className="text-6xl"> {props.highScore} points</p>
        </div>
        
        </div>
        <div className="flex items-center justify-center p-4" style={{height:"25%"}}>
        <button className="w-1/4 p-2 rounded-lg shadow-xl text-gray-700 text-lg font-mono bg-blue-300 hover:bg-purple-400 border-2 border-indigo-400" onClick={props.click}>Exit</button>
        </div>
            </div>

            <div className="block text-gray-400 p-10 w-1/2 text-2xl h-full bg-gray-800 overflow-y-auto capitalize">
            <p className="text-4xl mb-3">Remember to keep studying...</p>
                <p>Correct Answers :</p>
            <div className="w-full grid grid-cols-3 gap-4 mb-3">
        {props.correct.map(result => (
        <p key={result} className="p-2 flex items-center justify-center border border-gray-600 bg-green-600 text-white text-centre m-2 rounded-lg">{result}</p>
        ))}
        </div>
        <p>Wrong Answers :</p>
        <div className="w-full grid grid-cols-3 gap-4 mb-3">
        {props.wrong.map(result => (
        <p key={result} className="p-2 flex items-center justify-center border border-gray-600 bg-red-600 text-white m-2 text-centre rounded-lg">{result}</p>
        ))}
        </div>
    </div>
    </div>
)
}

export default ScoreCard;