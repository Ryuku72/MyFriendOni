import React from "react";
import "./style.css";
import bgImg from "../../assets/img/background.jpg";
import teacherPotrait from "../../assets/img/portrait.jpg"

function QuizBackground(props) {
  const oniSpeech = `${props.exp}` ? <p className="speechText flex-wrap">Hello... <span className="text-purple-500 speechTextPlus font-semibold speechTextName">{props.user}</span>. Your last High Score was <span className="text-red-500 speechTextPlus font-semibold speechTextName">{props.highScore} points</span>. <br></br> Remember... practice makes perfect!~ </p> : <p className="speechText flex-wrap">Hello... <span className="text-purple-500 speechTextPlus font-semibold speechTextName">{props.user}</span>. I am great teacher <span className="text-red-500 speechTextPlus font-semibold">Oni</span>. Let me teach you Japanese. Select a Quiz from the drop down menu</p>

  return (
      <div className="w-full justify-center" style={{height: `calc(100vh - (10vh + 8.5vh))`, ...props.bgToggle}}>
  <div className="animation flex items-center justify-center bg-black bg-center w-full" style={{ zIndex: -2, height:"82vh", backgroundImage:`url(${bgImg})`, backgroundSize: "100vw 82vh",}}>
<div id="quizOverlay" className="z-1 opacity-0 bg-gray-300 bg-opacity-50 active"  style={{ ...props.overlayStyle }}></div>
    </div>
    <div className="xl:w-4/5 sm:w-full h-full flex items-center justify-center">
  <div className="w-1/2 flex justify-center m-4 teacherPortraitBox overflow-hidden rounded-lg">
      <img src={teacherPotrait} alt="teacher_portait" className="teacherPortrait border-8 border-red-800 rounded-lg" style={{ zIndex: 20}} />
      </div>
      <div className="w-1/2 mx-10 bg-gray-100 speechBubble inline-flex flex-wrap items-center justify-center text-center" style={{height:"80%"}}>
          <div className="w-3/5 px-1 block">
               {oniSpeech}
          </div>
      </div>
      </div>
    </div>
  )
}

export default QuizBackground