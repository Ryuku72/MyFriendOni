import React from "react";
import "./style.css";
import Stat from "../Stat";

function Navbar(props) {
  return (
<nav className="navbar">
  <div className="navbar-nav w-full inline-flex items-end justify-between">
    <div className="inline-flex px-6">
<Stat title="Score" value={props.score}/>
<Stat title="High Score" value={props.highscore}/>
<Stat title="Total Score" value={props.totalscore}/>
</div>
<div className="flex h-full px-4 py-1">
<ul className="flex items-end">{ props.children }</ul>
</div>
</div>
</nav>
  );
}

export default Navbar;



