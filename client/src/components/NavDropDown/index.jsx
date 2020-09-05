import React from "react";
import "./style.css";

function NavDropDown(props) {
return( 
<div className={`dropdown border-2 z-50 pb-4 ${props.color}`} onMouseLeave={props.onHandleDropDown}>
{props.children}
</div>
)}

export default NavDropDown