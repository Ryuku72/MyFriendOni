import React from "react";
import "./style.css";
import NavButton from "../Navbutton";
import Stat from "../Stat";

function Navbar(props) {
  return (
    <nav className="w-full inline-flex bg-green-700 justify-end items-center" style={{height:"8vh"}}>
        <Stat title="User" value={props.user}/>
        <Stat title="Score" value={props.score}/>
        <Stat title="Time" value={props.time}/>
        <Stat title="High Score" value={props.highscore}/>
        <Stat title="Total Score" value={props.totalscore}/>
        <NavButton menu="Quiz" onClick={props.startQuiz}/>
        <NavButton menu="Vocabulary" />
        <NavButton menu="alphabet" />
        <NavButton menu="stats" />
        <NavButton menu="logout" onClick={props.logout}/>
    </nav>
  );
}

export default Navbar;