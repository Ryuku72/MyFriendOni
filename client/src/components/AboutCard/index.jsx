import React from "react";
import "./style.css";
import MongoPic from "../../assets/img/logos/mongodb.png"
import ExpressPic from "../../assets/img/logos/express.png"
import ReactPic from "../../assets/img/logos/react.png"
import NodePic from "../../assets/img/logos/node.png"
import HerokuPic from "../../assets/img/logos/heroku.svg"
import TailPic from "../../assets/img/logos/tailwind.png"
import PhotoPic from "../../assets/img/logos/photoshop.png"
import inkPic from "../../assets/img/logos/inkscape.png"
import googlePic from "../../assets/img/logos/gfonts.png"
import UWApic from "../../assets/img/logos/UWA.svg"
import trilogyPic from "../../assets/img/logos/Trilogy.png"
import flatPic from "../../assets/img/logos/flaticon.png"


function AboutCard(props){
    return (
        <div className="aboutText w-full h-full block absolute top-0 overflow-hidden" style={props.windowStyle}>
            <div  className="flex items-center justify-center h-full">
            <div className="flex flex-wrap justify-center h-full">
                <div className="h-full flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={NodePic} alt="nodejs" style={{width:"60%"}}/>
                </div>
                <div className="h-full flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={HerokuPic} alt="Heropkupic" style={{width:"15%"}}/>
                </div>
                <div className="h-full flex items-center justify-center " style={{width:"25%", height:"20vh" }}>
                <img src={ExpressPic} alt="express"style={{width:"60%"}}/>
                </div>
                <div className="h-full w-1/4 flex justify-center items-center " style={{width:"25%", height:"20vh" }}>
                <img src={MongoPic} alt="mongo" style={{width:"60%"}}/> 
                </div>
                <div className="h-full w-1/3 flex justify-center items-center " style={{width:"25%", height:"20vh" }}>
                <img src={PhotoPic} alt="photoshop" style={{width:"25%"}}/> 
                </div>
                <div className="h-full w-1/3 flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={inkPic} alt="inkscape" style={{width:"25%"}}/> 
                </div>       
                <div className="h-full w-1/3 flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={TailPic} alt="tailwind" style={{width:"25%"}}/> 
                </div>
                <div className="h-full w-1/3 flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={trilogyPic} alt="Trilogypic" style={{width:"100%"}}/> 
                </div>
                <div className="h-full w-1/3 flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={UWApic} alt="UWApic" style={{width:"50%"}}/> 
                </div>
                <div className="h-full flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={ReactPic} alt="react"style={{width:"50%"}}/>
                </div>
                <div className="h-full w-1/3 flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={googlePic} alt="googleFont" style={{width:"60%"}}/> 
                </div>
                <div className="h-full w-1/3 flex justify-center items-center" style={{width:"25%", height:"20vh" }}>
                <img src={flatPic} alt="flatIconPic" style={{width:"80%"}}/> 
                </div>
             
                <a href="https://joshuakb.netlify.app/" className="ftk text-center" target="_blank" rel="noopener noreferrer"> More information <span className="text-indigo-500">@</span> https://joshuakb.netlify.app/</a>
  
                </div>
                </div>
        </div>
    )
}

export default AboutCard;