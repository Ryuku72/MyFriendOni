import React, {useState} from "react";
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

    const [ modalOpen, setModalOpen ] = useState({ id: "" })
    const [deletedItem, setDeletedItem] = useState("")
    const [overlayActive, setOverlayActive] = useState(false)

    function memoDeleted(event){
        console.log(event.target.name)
        setDeletedItem(event.target.name)
        setOverlayActive(true)
        setModalOpen(false)
        setTimeout(()=>{
            setOverlayActive(false)
            setDeletedItem("")
        }, 1200)
    }

  return (
    <div className="text-black p-2 historyCard" style={props.style}>
      <img
        src={historyB}
        alt="slogan"
        className="relative p-5 my-2 xl:w-2/5 sm:w-3/4 top-0 left-0"
      />

      {props.userHistory.length ? (
        <div className="grid gap-3 grid-cols-3 border-black mt-2 w-full h-full"
          style={{ minHeight: "66vh" }}
        >
          {props.userHistory.map((result, index) => (
            <div
              key={index}
              className="p-8 flex flex-col justify-center historyCardClip relative"
              style={{ backgroundColor: `${randc(bgColor)}` }}
            >
              <button
                className="absolute top-0 right-0 p-3 quizTags historyXbtn focus:outline-none outline-none"
                id={result._id} onClick={() => setModalOpen({open:true, id: index})}
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

              <p className="capitalize quizTags underline mt-2 font-semibold">
                Correct Answers
              </p>
              <p className="capitalize quizTags">
                {result.correct.join(" , ")}
              </p>
              <p className="capitalize quizTags underline mt-2 font-semibold">
                Wrong Answers
              </p>
              <p className="capitalize quizTags">
                {result.incorrect.join(" , ")}
              </p>
              { modalOpen.id === index ? 
              <div className="quizTags historyPopup text-white text-center p-4 flex flex-col items-center justify-center bg-gray-900 rounded-lg"
              >
                <p>Confirm Delete</p>
                <p>
                  {new Intl.DateTimeFormat("en-AU", deleteFormat).format(
                    new Date(`${result.createdAt}`)
                  )}
                </p>
                <div className="w-full flex items-center justify-center mt-4">
                <button
                  className="flex items-center justify-center xl:w-1/6 sm:w-1/12 rounded-lg border-2 border-red-600 px-2 xl:text-lg sm:text-sm bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-2 shadow-xl focus:outline-none"
                  onClick={()=> setModalOpen(false)}
                >
                  &#10008;
                </button>
                <button value={result._id} name={new Intl.DateTimeFormat("en-AU", deleteFormat).format(
                    new Date(`${result.createdAt}`))} className="flex items-center justify-center xl:w-1/6 sm:w-1/12 mr-3 rounded-lg border-2 border-green-500 px-2 xl:text-lg sm:text-sm bg-green-500 hover:bg-green-400 hover:text-gray-300 shadow-xl focus:outline-none" onClick={(e)=>{props.deleteMemo(e); memoDeleted(e) }}>
                  &#10004;
                </button>
              </div>
              </div>  
              : <div></div> }
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
