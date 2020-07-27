import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Animation from "../components/Animation"
import PlayerCard from "../components/PlayerCard";
import { useAuth } from "../utils/auth";

function About(){
    const location = useLocation()
    const { setAuthTokens } = useAuth();

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

  function updateUser(event){
    event.preventDefault()
    // console.log("New User: " + event.target.name)
    // console.log("New Password: " + event.target.value)

    let request = {
        "username": event.target.name,
        "password": event.target.value
    }
    API.updateUser(user._id, request).then(result => {
        getUser()
        console.log(result)
        }).catch(err => console.log(err));
  }

  function deleteUser(event) {
    event.preventDefault()
    console.log(user._id)  
    
    API.deleteUser(user._id).then(answer => {
        console.log(answer)
        //log out
        setAuthTokens();
        }).catch(err => console.log(err));
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
          updateUser={updateUser}
          deleteUser={deleteUser}
          password={user.password}
        />
        </div>
        <Footer 
        user={user.username}
        style={"true"} 
        />
    </div>
    )
}

export default About;