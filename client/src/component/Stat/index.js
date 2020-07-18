import React from "react";
import "./style.css";

function Stat(props) {
return( 
<div className="mx-2 my-2 capitalize">
<p>{props.title}: {props.value}</p>
</div>
)}

export default Stat;