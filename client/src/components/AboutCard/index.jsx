import React from "react";
import "./style.css";
import MongoPic from "../../assets/img/logos/mongodb.png"
import ExpressPic from "../../assets/img/logos/express.png"
import ReactPic from "../../assets/img/logos/react.gif"
import NodePic from "../../assets/img/logos/node.png"
import HerokuPic from "../../assets/img/logos/heroku.svg"
import TailPic from "../../assets/img/logos/tailwind.png"
import PhotoPic from "../../assets/img/logos/photoshop.png"
import inkPic from "../../assets/img/logos/inkscape.png"
import googlePic from "../../assets/img/logos/gfonts.png"
import javascriptPic from "../../assets/img/logos/javascript.png"
import cssPic from "../../assets/img/logos/css.png"
import htmlPic from "../../assets/img/logos/html.png"
import iterm2Pic from "../../assets/img/logos/iterm2.png"
import vscodePic from "../../assets/img/logos/vscode.png"
import slackPic from "../../assets/img/logos/slack.png"
import UWApic from "../../assets/img/logos/UWA.svg"
import trilogyPic from "../../assets/img/logos/Trilogy.png"
import coffeegif from "../../assets/img/logos/coffee.gif"
import compgif from "../../assets/img/logos/computer.gif"
import flatPic from "../../assets/img/logos/flaticon.png"


function AboutCard(props){
    return (
        <div className="aboutText w-full h-full block absolute top-0 overflow-y-auto" style={props.windowStyle}>
            <div class="flex flex-wrap overflow-hidden">
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={TailPic} alt="tailwind" style={{width:"50%"}}/> 
                </div>
                <div class="h-full flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={NodePic} alt="nodejs" style={{width:"80%"}}/>
                </div>
                <div class="h-full flex items-center justify-center" style={{width:"20%", height:"20vh" }}>
                <img src={ExpressPic} alt="express"style={{width:"70%"}}/>
                </div>
                <div class="h-full w-1/4 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={MongoPic} alt="mongo" style={{width:"80%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={htmlPic} alt="htmllogo" style={{width:"50%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={cssPic} alt="csslogo" style={{width:"80%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={javascriptPic} alt="javascriptlogo" style={{width:"80%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={HerokuPic} alt="heroku" style={{width:"25%"}}/>
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={PhotoPic} alt="photoshop" style={{width:"50%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={inkPic} alt="inkscape" style={{width:"40%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={iterm2Pic} alt="iterm2pic" style={{width:"45%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={vscodePic} alt="vscodelogo" style={{width:"60%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={slackPic} alt="slackpic" style={{width:"60%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={UWApic} alt="UWApic" style={{width:"65%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={trilogyPic} alt="Trilogypic" style={{width:"100%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={coffeegif} alt="coffeePic" style={{width:"30%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <p className="text-center ftk">Foreign Toolkit</p>
                </div>
                <div class="h-full flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={ReactPic} alt="react"style={{width:"30%", height: "80%"}}/>
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={googlePic} alt="googleFont" style={{width:"90%"}}/> 
                </div>
                <div class="h-full w-1/3 flex justify-center items-center" style={{width:"20%", height:"20vh" }}>
                <img src={flatPic} alt="computerPic" style={{width:"100%"}}/> 
                </div>
                
                
  
                

                </div>
            {/* <img src={MongoPic} alt="mongo" style={{width:"20%", height:"20%"}}/> 
            <img src={ExpressPic} alt="express"  style={{width:"20%", height:"20%"}}/>
            <img src={ReactPic} alt="mongo" style={{width:"20%", height:"20%"}}/>
            <img src={NodePic} alt="mongo" style={{width:"20%", height:"20%"}}/>
            <img src={HerokuPic} alt="mongo" style={{width:"20%", height:"20%"}}/>
            <img src={TailPic} alt="mongo" style={{width:"20%", height:"20%"}}/> */}
            
            
            {/* <div className="h-full w-full text-white flex flex-col justify-center p-32">
                <p className="underline font-mono">About Foreign Toolkit</p>
                <p>1. `My Friend Oni` was built with the MERN stack.</p>
                <p>2:: MongoDB, Express, React and Node JS</p>
                <p>3. TailWindCSS</p>
                <p>4. Heroku: Website Host</p>
                <p>5. Mongo Atlas: Database Mangement</p>
                <p>6. Coffee: Essential Requirement of No Sleep </p>
                <p>7. Flat Icon & GoogleFont</p>
                <p>8. UWA+Trilogy 2020</p>
                <a href="https://joshuakb.netlify.app/" target="_blank" rel="noopener noreferrer"> More information @ https://joshuakb.netlify.app/</a>
            </div> */}




        </div>
    )
}

export default AboutCard;