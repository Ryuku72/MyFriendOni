import React from "react";
import "./style.css";

function Animation(props) {
  return (
    <div className="animation flex items-end justify-end bg-black" style={{ zIndex: -6 }}>
      <div id="titleSeq1" className="animation w-full h-full" style={{ zIndex: -2 }}></div>
      <div id="titleSeq2" className="animation w-full h-full" style={{ zIndex: -3 }}></div>
      <div id="titleSeq3" className="animation w-full h-full" style={{ zIndex: -4 }}></div>
      <div id="titleSeq4" className="animation w-full h-full" style={{ zIndex: -5 }}></div>
      <div id="titleSeq5" className="animation w-full h-full" style={{ zIndex: -6 }}></div>
      <div id="moon" className="animation" style={{ zIndex: 0 }}></div>
      
      <div className="w-1/3 mb-6 relative" style={{ height: "90%" }}>
      <div id="house" style={{ zIndex: 0, position: "absolute", bottom: "0%", left: "12.8%" }}></div>
      <div id="smoke" className="mb-24" style={{ zIndex: 0, position: "absolute", bottom: "0%",left: "14%" }}></div>
      </div>
      
      <div id="overlay" className="z-1 opacity-0 bg-gray-300 bg-opacity-50 active"  style={{ ...props.overlayStyle }}></div>
      <div id="overlay2" className="z-1 opacity-0 bg-gray-300 bg-opacity-50 active" style={{ ...props.overlayStyle2 }}></div>
    </div>
  );
}
export default Animation;
