import React from "react";
import "./style.css";
import bgImg from "../../assets/img/background.jpg";

function QuizBackground(props) {

  return (
      <div className="w-full" style={{height: `calc(100vh - (10vh + 8.5vh))`}}>
  <div className="animation  flex items-end justify-end bg-black bg-center" style={{ zIndex: -2, height:"92vh", backgroundImage:`url(${bgImg})`, backgroundSize: "100vw 82vh",}}>
<div id="quizOverlay" className="z-1 opacity-0 bg-gray-300 bg-opacity-50 active"  style={{ ...props.overlayStyle }}></div>
    </div>
    </div>
  )
}

export default QuizBackground