import React from "react";
import "./style.css";

function Animation() {
  return (
    <div
      className="animation flex items-end justify-end bg-black"
      style={{ zIndex:-8 }}
    >
      <div
        id="titleSeq1"
        className="bg-green-500 animation"
        style={{ zIndex:-5}}
      ></div>
      <div
        id="titleSeq2"
        className="bg-yellow-600 animation"
        style={{ zIndex:-6 }}
      ></div>
      <div
        id="titleSeq3"
        className="bg-pink-500 animation"
        style={{ zIndex:-7 }}
      ></div>
      <div
        id="titleSeq4"
        className="bg-blue-300 animation"
        style={{ zIndex:-8 }}
      ></div>
      <div id="moon" class="animation" style={{ zIndex: -2 }}></div>
        <div className="w-1/3 mb-6 relative" style={{height:"90%"}}>
      <div
        id="house"
        className="shadow-2xl"
        style={{ zIndex: -2, position: "absolute", bottom: "0%", left: "12.8%" }}
      ></div>
      <div
        id="smoke"
        className="mb-24"
        style={{
          zIndex: -4,
          position: "absolute",
          bottom: "0%",
          left: "19.5%",
        }}
      ></div>
    </div>
    <div id="overlay" class="z-1 opacity-0 bg-gray-300 bg-opacity-50 active"></div>
    </div>

  );
}
export default Animation;
