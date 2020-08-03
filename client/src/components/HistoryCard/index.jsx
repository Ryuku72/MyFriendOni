import React from 'react';
import historyB from "../../assets/svg/history.svg"
import "./style.css"

let dateFormat = {
    day: 'numeric', month: 'numeric', year: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false, timeZone: 'Australia/Perth'
    };

function HistoryCard(props) {

return(
    <div className="text-black p-2 historyCard" style={props.style}>
        <img src={historyB } alt="slogan" className="relative p-5 my-2 xl:w-2/5 sm:w-3/4 top-0 left-0" />

        {props.userHistory.length ?
        <div>
        {props.userHistory.map((result, index) => (
            <div key={index} className="border-b-2 border-black mt-6 capitalize p-2">
            <p>{new Intl.DateTimeFormat('en-AU', dateFormat).format(new Date(`${result.createdAt}`))}</p>
            <p>LANGUAGE: {result.language} </p>
            <p>SCORE: {result.score}</p>
            <ul>
                <li>WRONG: {result.incorrect.join(" , ")}</li>
                </ul>
            <ul className="mb-6">
                <li>CORRECT: {result.correct.join(" , ")}</li>
            </ul>
            </div>
        ))}
        </div> : <p> Currently No history logged </p>}
           
    </div>
)

}

export default HistoryCard;
