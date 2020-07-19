import React from "react";
import "./style.css";
import Stat from "../Stat";

function Navbar(props) {
  return (
<nav className="navbar">
  <div className="navbar-nav w-full inline-flex items-end justify-between">
    <div className="inline-flex">
<Stat title="Score" value={props.score}/>
<Stat title="High Score" value={props.highscore}/>
<Stat title="Total Score" value={props.totalscore}/>
</div>
<div>
<ul className="flex">{ props.children }</ul>
</div>
</div>
</nav>
  );
}

export default Navbar;



// <nav className="w-full inline-flex bg-green-700 justify-end items-center" style={{height:"8vh"}}>
//         <Stat title="User" value={props.user}/>
//         <Stat title="Score" value={props.score}/>
//         <Stat title="Time" value={props.time}/>
//         <Stat title="High Score" value={props.highscore}/>
//         <Stat title="Total Score" value={props.totalscore}/>
//         <NavButton menu="Quiz" onClick={props.startQuiz}/>
//         <NavButton menu="Vocabulary" />
//         <NavButton menu="alphabet" />
//         <NavButton menu="stats" />
//         <NavButton menu="logout" onClick={props.logout}/>
//     </nav>