import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Animation from "../components/Animation"
import PlayerCard from "../components/PlayerCard";
import AboutCard from "../components/AboutCard";

function About(){

  let dateFormat = {
  day: 'numeric', month: 'numeric', year: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false, timeZone: 'Australia/Perth'
  };


    const history = useHistory()
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
      const [about, setAbout] = useState(false)
      const [updatePreviousPw, setUpdatePreviousPw] = useState("")
      const [updateUser, setUpdateUser] = useState("")
      const [updatePw, setUpdatePw] = useState("");
      const [errorMsg, setErrorMsg] = useState({
        edit: "",  
        delete: ""
      })
 
      const [passwordOne, setPasswordOne] = useState("");
      const [passwordTwo, setPasswordTwo] = useState("");
      const [editForm, setEditForm] = useState(false);  
      const [deleteForm, setDeleteForm] = useState(false);
      const [deleteError, setDeleteError] = useState(false)
      const [updateError, setUpdateError] = useState(true)
      const [confirm, setConfirm] = useState({
        edit: false,
        delete: false,
      });
      const [uTime, setUTime] = useState({
        createdAt: "",
        updatedAt: ""
      })
      
    // API calls
  useEffect(() => {
    getUser();
    setAbout(true)
  }, [location]);

  // Database Calls
  function getUser() {
    const user = localStorage.getItem("tokens");
    //console.log(userID)
    API.getUser(user).then((result) => {
      setUser(result.data);
      let create = (new Intl.DateTimeFormat('en-AU', dateFormat).format(new Date(result.data.createdAt)))
      let update = (new Intl.DateTimeFormat('en-AU', dateFormat).format(new Date(result.data.updatedAt)))

      setUTime({createdAt: create, updatedAt: update})
    });
  }

  function onHandlePreviousPassword(event) {
    event.preventDefault()
    //console.log(event.target.value)
    setUpdatePreviousPw(event.target.value.toLowerCase())
  }

  function onHandleNewUserName(event){
    event.preventDefault()
    //console.log(event.target.value)
    setUpdateUser(event.target.value.toLowerCase())
  }

  function onHandleNewPassword(event){
    event.preventDefault()
    //console.log(event.target.value)
    setUpdatePw(event.target.value.toLowerCase())
  }

  function toggleEditBox(event) {
    event.preventDefault();
    setEditForm(!editForm);
    setUpdateUser("");
    setUpdatePw("");
    setErrorMsg({...errorMsg, edit:""})
    setConfirm({ ...confirm, edit: false });
  }

  function closeEditBox(event){
    event.preventDefault()
    setEditForm(false)
  }

  function resetEditForm(event) {
    event.preventDefault();
    setUpdatePreviousPw("")
    setUpdateUser("");
    setUpdatePw("");
    setUpdateError(false)
  }

  function onHandleUpdate(event) {
    event.preventDefault();
   console.log(event);
   setUpdateError(false)

    function error (message) {
      setErrorMsg({...errorMsg, edit:message})
      setUpdateError(true)
    }

    if  ((updateUser === "" ) && (updatePw === "" ) && (updatePreviousPw === "")){
      error("Error: Inputs are blank")
    }
    else if (updatePreviousPw === ""){
      error("Error: Previous Password is blank")
    }
    else if (updatePreviousPw.length <= 7){
      error("Error: Previous password must be at least 8 characters")
    }
    else if (updateUser === "" ) {
      error("Error: Username is blank")
    } 
    else if (updateUser.length <= 5){
      error("Error: Username must be at least 6 characters")
    }
    else if (updatePw === "" ) {
      error("Error: Password is blank")
   }
    else if (updatePw.length <= 7){
      error("Error: Previous password must be at least 8 characters")
    }  
    else {
       setConfirm({ ...confirm, edit: true });
    }
  }

  function cancelUpdate(event){
    event.preventDefault();
    setUpdatePreviousPw("")
    setUpdateUser("");
    setUpdatePw("");
    setConfirm({ ...confirm, edit: false })
}

function updateDetails(event){
  event.preventDefault()
   //console.log("New User: " + event.target.name)
   //console.log("New Password: " + event.target.value)
   //console.log(previousPw)
   //console.log(user._id)
   //console.log(request)
  
   let request = {
      "previouspw": updatePreviousPw,
      "username": updateUser,
      "password": updatePw
  }
  
   API.updateLogin(user._id, request).then(result => {
       //console.log(result)
       confirmUpdate()
       getUser()
    }).catch(err => {
      //console.log(err.response.data)
      setUpdateError(true)
      setUpdatePreviousPw("")
      setUpdateUser("");
      setUpdatePw("");
      setConfirm({ ...confirm, edit: false}) 
      setErrorMsg({...errorMsg, edit: err.response.data.errors})
    });
}

function toggleDeleteBox(event) {
  event.preventDefault();
  setDeleteForm(!deleteForm);
  setPasswordOne("");
  setPasswordTwo("");
  setErrorMsg({...errorMsg, delete:""})
  setConfirm({ ...confirm, delete: false });
}

function closeDeleteBox(event){
  event.preventDefault()
  setDeleteForm(false)
}

function onHandlePasswordOne(event){
  event.preventDefault()
  //console.log(event.target.value)
  setErrorMsg(errorMsg)
  setDeleteError(false)
  setPasswordOne(event.target.value)
}

function onHandlePasswordTwo(event){
  event.preventDefault()
  //console.log(event.target.value)
  setErrorMsg(errorMsg)
  setDeleteError(false)
  setPasswordTwo(event.target.value)
}

function resetDeleteForm(event) {
  event.preventDefault();
  setPasswordOne("");
  setPasswordTwo("");
  setDeleteError(false)
}

function handleDeleteUser(event) {
  event.preventDefault();

  function error (message) {
    setErrorMsg({...errorMsg, delete:message})
    setDeleteError(true)
  }
  if ((passwordOne === "" ) && (passwordTwo === "" )){
    error("Error: Inputs are blank")
  }
  else if (passwordOne === "" ){
    error("Error: Password is blank")
  }
  else if (passwordOne.length <= 7 ){
    error("Error: Password must be at least 8 characters")
  }
  else if (passwordTwo === "" ){
    error("Error: Confirm Password is blank")
  }
  else if (passwordTwo.length <= 7 ){
    error("Error: Confirm Password must be at least 8 characters")
  }
  else if (passwordOne !== passwordTwo) {
      error("Error: Inputs don't match")
  } else {
      setConfirm({ ...confirm, delete: true}) 
  }
}

function deleteUser(event) {
  event.preventDefault()
  console.log("delete button triggered")
  console.log(user._id)  
  const request = { "password" : passwordOne}
  API.deleteUsers(user._id, request)
  .then(answer => {
    console.log("hit delete front end")
      // //log out
      try{
        API.logoutUser().then(result=> console.log(result))
        window.localStorage.removeItem("tokens");
        history.push('/')
      } catch (e) {
        console.log(e.message)
      }
    }).catch(err => {
      console.log(err.response.data)
      setPasswordOne("");
      setPasswordTwo("");
      setDeleteError(true)
      setConfirm({ ...confirm, delete: false}) 
      setErrorMsg({...errorMsg, delete: err.response.data.errors})
    });
}

function cancelDelete(event){
  event.preventDefault();
  setPasswordOne("");
  setPasswordTwo("");
  setConfirm({ ...confirm, delete: false })
}

function confirmUpdate(){
  setConfirm({ ...confirm, edit: false });
  setUpdatePreviousPw("")
  setUpdateUser("");
  setUpdatePw("");
  setErrorMsg({...errorMsg, edit:"User Details Updated!"})
  setUpdateError(true)
}

    return (
    <div>
        <Navbar 
        highscore={0} 
        totalscore={user.totalScore} 
        score={0}
        /><div className="relative" style={{zIndex:2, height: `calc(100vh - (10vh + 8vh))`}} >
        <Animation 
         overlayStyle={{opacity: location.pathname === "/about/player" ?  "1" : "0"}} 
         overlayStyle2={{opacity: location.pathname === "/about/info" ?  "1" : "0"}} 
        />
        <PlayerCard
          windowStyle={{height: location.pathname === "/about/player" ? "100%" : "0%", opacity: location.pathname === "/about/player" ?  "1" : "0"}} 
          user={user.username}
          start={uTime.createdAt}
          eng={user.engHighScore}
          hira={user.hiraHighScore}
          jpn={user.jpnHighScore}
          kata={user.kataHighScore}
          total={user.totalScore}
          update={uTime.updatedAt}
          updateDetails={updateDetails}
          deleteUser={deleteUser}
          toggleEditBox={toggleEditBox}
          editBoxStyle={{height: editForm ? "50%" : "0", opacity: editForm ? "1" : "0" }}
          closeEditBox={closeEditBox}
          updatePreviousPw={updatePreviousPw}
          onHandlePreviousPassword={onHandlePreviousPassword}
          updateUser={updateUser}
          onHandleNewUserName={onHandleNewUserName}
          updatePw={updatePw}
          onHandleNewPassword={onHandleNewPassword}
          editBoxError={{opacity: updateError ? "1" : "0"}}
          editErrorMsg={errorMsg.edit}
          resetEditForm={resetEditForm}
          onHandleUpdate={onHandleUpdate}
          confirmEdit={{display: confirm.edit ? "flex" : "none"}}
          updateUser={updateUser}
          updatePw={updatePw}
          updateEditError={{opacity: updateError ? "1" : "0"}}
          cancelUpdate={cancelUpdate}
          toggleDeleteStyle={{ height: deleteForm ? "50%" : "0", opacity: deleteForm ? "1" : "0"}}
          toggleDeleteBox={toggleDeleteBox}
          closeDeleteBox={closeDeleteBox}
          passwordOne={passwordOne}
          onHandlePasswordOne={onHandlePasswordOne}
          passwordTwo={passwordTwo}
          onHandlePasswordTwo={onHandlePasswordTwo}
          deleteBoxError={{opacity: deleteError ? "1" : "0"}}
          deleteErrorMsg={errorMsg.delete}
          resetDeleteForm={resetDeleteForm}
          handleDeleteUser={handleDeleteUser}
          confirmDeleteStyle={{ display: confirm.delete ? "flex" : "none" }}
          cancelDelete={cancelDelete}
        />
        <AboutCard windowStyle={{opacity: location.pathname === "/about/info" ?  "1" : "0", zIndex: location.pathname === "/about/info" ?  "30" : "-2"}} />
        
        </div>
        <Footer 
        user={user.username}
        style={about}
        >
          <div></div>
          </Footer>
    </div>
    )
}

export default About;