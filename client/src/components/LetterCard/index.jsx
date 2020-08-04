import React from "react";
import "./style.css";
import Character from "../Character";

let bgColor = [
  "#8dd3c7",
  "#ffffb3",
  "#bebada",
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#b3de69",
  "#fccde5",
  "#d9d9d9",
  "#bc80bd",
  "#ccebc5",
  "#ffed6f",
];

const randc = function (array) {
  return array[(Math.random() * array.length) | 0];
};

function LetterCard(props) {
  return (
    <div
      className="flex-col items-center rounded-lg mt-2 shadow-lg text-xl font-mono text-gray-700 searchCard"
      style={{ backgroundColor: `${randc(bgColor)}`, ...props.display }}
    >
      <div className="capitalize flex flex-col justify-center items-center p-8">
        <span className="inline-flex items-center kanji2">
          <Character language={props.language} character={props.hiragana} />{" "}
          {"-"}
          <Character language={props.language} character={props.katakana} />
        </span>
        <p className="text-center kanji2 mt-6">{props.romaji}</p>
      </div>
    </div>
  );
}

export default LetterCard;
