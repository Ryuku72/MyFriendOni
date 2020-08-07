import React from "react";
import "./style.css";

function NavDropDownItem(props) {
return( 
    <li>
<div className={`py-3 menu-item flex items-center hover:bg-orange-400 rounded-lg font-mono ${props.align}`} onClick={props.click}>
<div className={`w-1/4 ${props.IconAlign}`}>
<img className={`dropDownIcon rounded-full border-2 border-gray-600 focus:outline-none ${props.color}`} src={props.icon} alt="menu"/>
</div>
<div className="2/4">
<span className="menu-text">{props.text}</span>
</div>
</div>
</li>
)
}

export default NavDropDownItem;