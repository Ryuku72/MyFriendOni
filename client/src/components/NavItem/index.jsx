import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavItem(props) {
  return (
    <Link to={props.link}>
    <div className="nav-item mx-4"> 
    <div className="focus:outline-none">
      <img className={`rounded-full border-2 border-gray-600 icon-button p-1 ${props.color}`} src={props.icon} alt="menu icon" onClick={props.onHandleDropDown, props.click} onMouseEnter={props.onHandleDropDown}></img>
    </div>
    <ul>
    { props.open && props.children }
    </ul>
    </div>
    </Link>
  )
}

export default NavItem;
