import React from "react";
import "./style.css";

function NavItem(props) {
  return (
    <div className="nav-item"> 
    <div className="focus:outline-none">
      <img className={`rounded-full border-2 border-gray-600 icon-button mx-3 ${props.color}`} src={props.icon} alt="menu icon" onClick={props.click} onMouseEnter={props.onHandleDropDown}></img>
    </div>
    <ul>
    { props.open && props.children }
    </ul>
    </div>
  )
}

export default NavItem;
