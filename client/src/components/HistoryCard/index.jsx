import React from 'react';
import "./style.css"

function HistoryCard(props) {
console.log(props.userHistory)
return(
    <div className="text-black p-8 overflow-y-auto" style={{height:"82vh"}}>
        <p className="p-8 text-6xl">Work In PROGRESS</p>
        
        {props.userHistory.map((result, index) => (
            <div className="border-b-2 border-black">
            <p key={index}>{result.createdAt}</p>
            <p>SCORE: {result.score}</p>
            <ul>
                <li>WRONG: {result.incorrect.join("| ")}</li>
                </ul>
            <ul>
                <li>CORRECT: {result.correct.join("| ")}</li>
            </ul>
            </div>
        ))}
           
    </div>
)

}

export default HistoryCard;
