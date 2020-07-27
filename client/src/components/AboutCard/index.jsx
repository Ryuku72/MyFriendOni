import React from "react";
import "./style.css";

function AboutCard(props){
    return (
        <div className="w-full h-full border-8 border-red-700 absolute top-0" style={props.windowStyle}>
            <div className="h-full w-full text-white text-4xl flex flex-col justify-center p-32">
                <p className="underline font-mono">About Foreign Toolkit</p>
                <p>1. `My Friend Oni` was built with MERN stack.</p>
                <p>2:: Mongo, Express, React and Node.js</p>
                <p>3. TailWindCSS: CSS Framework $$</p>
                <p>4. ## Heroku: Website Host</p>
                <p>5. Mongo Atlas: Database Mangement</p>
                <p>6. Coffee: Essential Requirement of No Sleep </p>
                <p>7. Flat Icon & GoogleFont</p>
                <p>8. UWA+Trilogy 2020</p>
                <a href="https://joshuakb.netlify.app/">More information @ https://joshuakb.netlify.app/</a>
            </div>

        </div>
    )
}

export default AboutCard;