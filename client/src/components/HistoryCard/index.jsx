import React, { useState } from "react";
import historyB from "../../assets/svg/history.svg";
import "./style.css";


let dateFormat = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};

let timeFormat = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  timeZone: "Australia/Perth",
};

let deleteFormat = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  timeZone: "Australia/Perth",
};

let bgColor = [
  "#8dd3c7",
  "#ffffb3",
  "#bebada",
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#b3de69",
  "#fccde5",
  "#d9d9d9",
  "#bc80bd",
  "#ccebc5",
  "#ffed6f",
];


const randc = function (array) {
  return array[(Math.random() * array.length) | 0];
};

function HistoryCard(props) {

    const [deletedItem, setDeletedItem] = useState("")
    const [overlayActive, setOverlayActive] = useState(false)

    function memoDeleted(event){
        //console.log(event.target.name)
        setDeletedItem(event.target.name)
        setOverlayActive(true)
        setTimeout(()=>{
            setOverlayActive(false)
            setDeletedItem("")
        }, 1200)
    }

  return (
    <div className="text-black p-2 historyCard" style={props.style}>
      <div className="flex flex-wrap w-full justify-between">
      <img
        src={historyB}
        alt="slogan"
        className="relative p-5 my-2 xl:w-2/5 sm:w-3/4 top-0 left-0"
      />
      <h2 className="footerChild text-gray-800 text-2xl flex items-end justify-end p-6 my-2">
            Results :
            <span className="footerChild font-mono capitalize ml-2 text-red-500">
              { props.length }
            </span>
          </h2>
          </div>
      {props.userHistory.length ? (
        <div className="grid gap-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 border-black mt-2 w-full h-full"
          style={{ minHeight: "66vh" }}
        >
          {props.userHistory.map((result, index) => (
            <div
              key={index}
              className="p-8 flex flex-col justify-center historyCardClip relative"
              style={{ backgroundColor: `${randc(bgColor)}` }}
            >
              <button name={new Intl.DateTimeFormat("en-AU", deleteFormat).format(
                    new Date(`${result.createdAt}`))}
                className="absolute top-0 right-0 p-3 quizTags historyXbtn focus:outline-none outline-none"
                id={result._id} onClick={(e)=>{props.deleteMemo(e); memoDeleted(e) }}
              >
                &#10008;
              </button>
              <p className="quizTags">
                <span className="font-semibold">DATE: </span>
                {new Intl.DateTimeFormat("en-AU", dateFormat).format(
                  new Date(`${result.createdAt}`)
                )}
              </p>
              <p className="quizTags">
                <span className="font-semibold">TIME: </span>
                {new Intl.DateTimeFormat("en-AU", timeFormat).format(
                  new Date(`${result.createdAt}`)
                )}
              </p>
              <p className="capitalize quizTags">
                <span className="font-semibold">LANGUAGE: </span>
                {result.language}{" "}
              </p>
              <p className="quizTags">
                <span className="font-semibold">SCORE: </span> {result.score}
              </p>

              <p className="capitalize quizTags mt-2">
              <span className="underline font-semibold"> Correct Answers</span>: {result.correct.length}
              </p>
              <p className="capitalize quizTags">
                {result.correct.join(" , ")}
              </p>
              <p className="capitalize quizTags mt-2">
                <span className="underline font-semibold"> Wrong Answers</span>: {result.incorrect.length}
              </p>
              <p className="capitalize quizTags">
                {result.incorrect.join(" , ")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex" style={{ height: "66vh" }}>
          <p className="p-4 noInfo"> Currently no history logged... </p>
        </div>
      )}
      {overlayActive ? 
      <div className="overlayHistory">
          <div className="w-full h-full p-8 flex items-center justify-center">
              <p className="bg-red-700 p-8 rounded-lg text-white font-mono">{deletedItem} has been deleted</p>
          </div>
      </div>
        : <></> }
    </div>
  );
}

export default HistoryCard;
