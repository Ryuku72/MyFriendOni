import React from "react";
import "./style.css";
import MongoPic from "../../assets/img/logos/mongodb.png"
import ExpressPic from "../../assets/img/logos/express.png"
import ReactPic from "../../assets/img/logos/react.png"
import NodePic from "../../assets/img/logos/node.png"
import HerokuPic from "../../assets/img/logos/heroku.png"
import TailPic from "../../assets/img/logos/tailwind.png"
import PhotoPic from "../../assets/img/logos/photoshop.png"
import inkPic from "../../assets/img/logos/inkscape.png"
import googlePic from "../../assets/img/logos/gfonts.png"
import UWApic from "../../assets/img/logos/UWA.svg"
import trilogyPic from "../../assets/img/logos/Trilogy.png"
import flatPic from "../../assets/img/logos/flaticon.png"
import reduxPic from "../../assets/img/logos/redux.png"

function AboutCard(props){
    return (
        <div className="aboutText w-full h-full block absolute top-0 xl:overflow-hidden min-h-full" style={props.windowStyle}>
            <div  className="flex flex-col items-center justify-center h-full">
            <div className="grid grid-cols-3 w-full p-2" style={{height:"85%"}}>
           
                <div className=" aboutBox">
                <img src={inkPic} alt="inkscape" className="bigIcon"/> 
                </div>
                <div className="aboutBox">
                <img src={ReactPic} alt="react" className="mdIcon"/>
                </div>        
                <div className="aboutBox" >
                <img src={ExpressPic} alt="express" className="mdIcon"/>
                </div>
                <div className="aboutBox">
                <img src={MongoPic} alt="mongo" className="mdIcon"/> 
                </div>
                <div className="aboutBox">
                <img src={NodePic} alt="nodejs" className="mdIcon"/>
                </div>
                <div className="aboutBox">
                <img src={reduxPic} alt="Redux" className="mdIcon"/> 
                </div>
                <div className="aboutBox">
                <img src={TailPic} alt="tailwind" className="bigIcon"/> 
                </div>
                <div className="aboutBox">
                <img src={HerokuPic} alt="Heropkupic" className="mdIcon"/>
                </div>
                <div className="aboutBox">
                <img src={flatPic} alt="flatIconPic"className="smIcon"/> 
                </div>
                <div className="aboutBox">
                <img src={googlePic} alt="googleFont" className="smIcon"/> 
                </div>
                <div className="aboutBox">
                <img src={trilogyPic} alt="Trilogypic"/> 
                </div>
                <div className="aboutBox">
                <img src={UWApic} alt="UWApic"className="UWAIcon"/> 
                </div>
                
               
                </div>
                <a href="https://joshuakb.netlify.app/" className="ftk text-center" target="_blank" rel="noopener noreferrer"> More information <span className="text-indigo-500">@</span> https://joshuakb.netlify.app/</a>
                </div>
        </div>
    )
}

export default AboutCard;