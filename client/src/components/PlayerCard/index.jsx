import React from "react";
import "./style.css";
import Letter from "../Letter";
import Animation from "../Animation";

function PlayerCard(props) {
return (
    <div className="w-full h-full p-12 font-mono">
        <div className="w-1/2 h-full bg-gray-400 rounded-lg shadow-2xl">
            <header className="w-full flex p-4 bg-indigo-500 rounded-t-lg border-4 border-indigo-700" style={{height:"15%"}}>
            <p className="w-1/2 flex items-end text-white text-3xl">Player Information</p>
            <div className="w-1/2 flex items-start justify-end">
            <button className="w-1/6 rounded-full border-2 border-green-700 px-3 py-1 text-sm bg-green-500">Edit</button>
            <button className="w-1/6 rounded-full border-2 border-red-700 px-3 py-1 text-sm bg-red-500 mx-2">Del</button>
            </div>
            </header>
            <div className="w-full p-8 flex flex-col justify-center border-b-4 border-l-4 border-r-4 border-gray-600 rounded-b-lg text-gray-800 leading-10" style={{height:"85%"}}>

            <div className="inline-flex justify-between w-full text-gray-800">
                <p className="font-semibold text-xl">Username:
                    <span className="capitalize font-thin ml-4">{props.user}</span>
                    </p></div>

            <div className="inline-flex justify-between w-full">
                <p className="text-xl">
                <span className=" font-semibold mr-4">Start Date:
                </span>{props.start}</p></div>

            <div className="inline-flex justify-between w-full">
                <p className="text-xl">
                    <span className="font-semibold mr-4">Last Update:
                </span>{props.update}</p></div>
            
            <p className="mt-8 text-xl underline mb-4 font-semibold">High Score</p>
            <div className="w-11/12">
            <div className="inline-flex justify-between w-full"><p>Japanese Vocabulary</p><p className="flex items-start"><span className="playerInfo text-red-500 font-semibold">{props.jpn}</span>points</p></div>
            <div className="inline-flex justify-between w-full"><p>English Vocabulary</p><p className="flex items-start"><span className="playerInfo text-red-500 font-semibold">{props.eng}</span>points</p></div>
            <div className="inline-flex justify-between w-full"><p>Katakana Letters</p><p className="flex items-start"><span className="playerInfo text-red-500 font-semibold">{props.kata}</span>points</p></div>
            <div className="inline-flex justify-between w-full"><p>Hiragana Letters</p><p className="flex items-start"><span className="playerInfo text-red-500 font-semibold">{props.hira}</span>points</p></div>
            <div className="inline-flex justify-between w-full mt-6"><p className="flex items-start">Total Score</p><p className="flex items-start"><span className="playerInfo text-red-500 font-semibold">{props.total}</span>points</p></div>
            </div>
        </div>
        </div>
    </div>
)
}

export default PlayerCard;

