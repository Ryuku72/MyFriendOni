import React from 'react';
import "./style.css"

function HistoryCard(props) {
//console.log(props.sessions)
return(
    <div className="text-black" style={{height:"82vh"}}>
        <p className="p-8 text-6xl">Work In PROGRESS</p>
        {/* {props.sessions.map(({result}, index) => {
           return  <p key={index}>{result.date}</p>
        })} */}
    </div>
)

}

export default HistoryCard;
