import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Animation from "../components/Animation"
import PlayerCard from "../components/PlayerCard";
import AboutCard from "../components/AboutCard";

function About(){
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
    });
  }

  function deleteUser(event) {
    event.preventDefault()
    console.log(user._id)  
    
    API.deleteUser(user._id).then(answer => {
        console.log(answer)
        //log out
        try{
          API.logoutUser().then(result=> console.log(result))
          window.localStorage.removeItem("tokens");
          history.push('/')
        } catch (e) {
          console.log(e.message)
        }
        }).catch(err => console.log(err));
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

    if  ((updateUser === "" ) && (updatePw === "" ) && (updatePreviousPw === "")){
    setErrorMsg({...errorMsg, edit:"Error: Inputs are blank"})
    setUpdateError(true)
    setUpdatePreviousPw("")
    setUpdateUser("")
    setUpdatePw("")
    }
    else if (updateUser === "" ) {
        setErrorMsg({...errorMsg, edit:"Error: Username is blank"})
        setUpdateError(true)
        setUpdatePreviousPw("")
        setUpdateUser("")
        setUpdatePw("")
    } 
    else if (updatePw === "" ) {
        setErrorMsg({...errorMsg, edit:"Error: Password is blank"})
        setUpdateError(true)
        setUpdatePreviousPw("")
        setUpdateUser("")
        setUpdatePw("")
    }
    else if (updatePreviousPw === ""){
      setErrorMsg({...errorMsg, edit:"Error: Previous Pw is blank"})
      setUpdateError(true)
      setUpdatePreviousPw("")
      setUpdateUser("")
      setUpdatePw("")
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

  let previousPw = { "password": updatePreviousPw}

  let request = {
      "username": updateUser,
      "password": updatePw
  }

  //console.log(previousPw)
  //console.log(request)
  
  // API.updateLogin(user._id, request).then(result => {
  //     console.log(result)
  //    getUser()
  //     }).catch(err => console.log(err));

  confirmUpdate()
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

  if ((passwordOne === "" ) || (passwordTwo === "" )){
      setErrorMsg({...errorMsg, delete:"Error: Input is blank"})
      setPasswordOne("");
      setPasswordTwo("");
      setDeleteError(true)
  }
  else if (passwordOne !== passwordTwo) {
      setErrorMsg({...errorMsg, delete:"Error: Inputs don't match"})
      setPasswordOne("");
      setPasswordTwo("");
      setDeleteError(true)
  }
  else if ((passwordOne !== user.password) || (passwordTwo !== user.password)){
      setErrorMsg({...errorMsg, delete: "Error: Incorrect password"})
      setPasswordOne("");
      setPasswordTwo("");
      setDeleteError(true)
  } else {
      //compare to previous password

      //if wrong throw error
      //Error: Previous and Current Pw don't match
    
      setConfirm({ ...confirm, delete: true}) 
      } 
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
          start={user.createdAt}
          eng={user.engHighScore}
          hira={user.hiraHighScore}
          jpn={user.jpnHighScore}
          kata={user.kataHighScore}
          total={user.totalScore}
          update={user.updatedAt}
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
          confirmEdit={{display: confirm.edit ? "block" : "none"}}
          updateUser={updateUser}
          updatePw={updatePw}
          updateEditError={{opacity: updateError ? "1" : "0"}}
          cancelUpdate={cancelUpdate}
          toggleDeleteStyle={{ height: deleteForm ? "50%" : "0", opacity: deleteForm ? "1" : "0",
          }}
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
          confirmDeleteStyle={{ display: confirm.delete ? "block" : "none" }}
          cancelDelete={cancelDelete}
        />
        <AboutCard windowStyle={{opacity: location.pathname === "/about/info" ?  "1" : "0", zIndex: location.pathname === "/about/info" ?  "10" : "-2"}} />

        </div>
        <Footer 
        user={user.username}
        style={about}
        />
    </div>
    )
}

export default About;