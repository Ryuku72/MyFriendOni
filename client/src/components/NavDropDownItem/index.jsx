import React from "react";
import "./style.css";

function NavDropDownItem(props) {
return( 
    <li>
<a href="/#" className={`py-2 px-5 menu-item flex justify-between items-center text-lg hover:bg-orange-400 rounded-lg font-mono ${props.align}`} onClick={props.click}>
<img className={`w-12 h-12 rounded-full border-2 border-gray-600 focus:outline-none ${props.color}`} src={props.icon} alt="menu"/>
<p className="menu-text">{props.text}</p>
</a>
</li>
)
}

export default NavDropDownItem;