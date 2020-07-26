import React from "react";
import "./style.css";

function Animation() {
  return (
    <div
      className="relative block bg-black"
      style={{ height: `calc(100vh - (10vh + 8vh))` }}
    >
      <div
        id="titleSeq1"
        className="bg-green-500 animation"
        style={{ zIndex: 4 }}
      ></div>
      <div
        id="titleSeq2"
        className="bg-yellow-600 animation"
        style={{ zIndex: 3 }}
      ></div>
      <div
        id="titleSeq3"
        className="bg-pink-500 animation"
        style={{ zIndex: 2 }}
      ></div>
      <div
        id="titleSeq4"
        className="bg-blue-300 animation"
        style={{ zIndex: 1 }}
      ></div>
      <div id="moon" class="animation" style={{ zIndex: 6 }}></div>
      <div className="w-full h-full flex items-end justify-end">
        <div className="w-1/3 mb-6 h-full relative flex">
      <div
        id="house"
        className="shadow-2xl"
        style={{ zIndex: 7, position: "absolute", bottom: "0%", left: "10%" }}
      ></div>
      <div
        id="smoke"
        className="mb-24"
        style={{
          zIndex: 6,
          position: "absolute",
          bottom: "0%",
          left: "19.5%",
        }}
      ></div>
    </div>
    </div>
    <div id="overlay" class="z-10 opacity-0 bg-gray-300 bg-opacity-50 active"></div>
    </div>

  );
}
export default Animation;
