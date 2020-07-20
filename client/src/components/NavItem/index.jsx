import React from "react";
import "./style.css";

function NavItem(props) {
  return (
    <li className="nav-item mx-4 my-2"> 
    <a href="/#" className="focus:outline-none"><img className={`w-16 rounded-full border-2 border-gray-600 icon-button p-1 ${props.color}`} src={props.icon} alt="menu icon" onClick={props.onHandleDropDown} 
    onMouseEnter={props.onHandleDropDown}></img>
    </a>
    { props.open && props.children }
    </li>
  )
}

export default NavItem;
