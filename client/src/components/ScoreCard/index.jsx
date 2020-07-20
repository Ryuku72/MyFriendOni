import React from "react";
import "./style.css";

function ScoreCard(props) {
return (
    <div className="w-3/4 h-full border-8 border-yellow-300 bg-yellow-500 flex-col p-8" style={props.style}>
        <h1 className="text-center text-lg">Total Score</h1>
        <h2 className="text-center font-mono text-6xl">{props.score}</h2>
        <h3 className="font-mono text-2xl">Correct Answers: {props.correct.length}</h3>
        {props.correct.map(result => (
            
        <p key={result}>{result}</p>
        ))}
        <h3 className="font-mono text-2xl">Wrong Answers: {props.wrong.length}</h3>
        {props.wrong.map(result => (
        <p key={result}>{result}</p>
        ))}
        <h5 className="font-mono text-2xl">Highest Score: {props.highScore}</h5>
        <h6 className="font-mono text-2xl">Date: {props.date}</h6>
        <p>Remember to Study before your next quiz</p>
        <button onClick={props.click}>Exit</button>
    </div>
)
}

export default ScoreCard;