import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Animation from "../components/Animation"
import PlayerCard from "../components/PlayerCard";

function About(){
    const location = useLocation()
    const [user, setUser] = useState({
        createdAt: "",
        engHighScore: 0,
        hiraHighScore: 0,
        jpnHighScore: 0,
        kataHighScore: 0,
        password: "",
        totalScore: 0,
        updatedAt: "",
        username: "",
      });

      
    // API calls
  useEffect(() => {
    getUser();
  }, [location]);

  // Database Calls
  function getUser() {
    const user = localStorage.getItem("tokens");
    const userID = JSON.parse(user)["_id"];
    //console.log(userID)
    API.getUser(userID).then((result) => {
      setUser(result.data);
    });
  }
    
    return (
    <div>
        <Navbar 
        highscore={0} 
        totalscore={user.totalScore} 
        score={0}
        /><div className="relative" style={{zIndex:2, height: `calc(100vh - (10vh + 8vh))`}} >
        <Animation />
        <PlayerCard 
          user={user.username}
          start={user.createdAt}
          eng={user.engHighScore}
          hira={user.hiraHighScore}
          jpn={user.jpnHighScore}
          kata={user.kataHighScore}
          total={user.totalScore}
          update={user.updatedAt}
        />
        </div>
        <Footer 
        style={"true"} 
        />
    </div>
    )
}

export default About;