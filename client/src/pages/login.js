import React, {useState } from 'react';
import { useHistory } from "react-router-dom";
import Form from "../component/Form"
import axios from "axios";
import Header from "../component/Header"

function Login(){
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false)

  let history = useHistory();

  function clearForm() {
    document.getElementById("loginform").reset();
    setUserName("")
    setPassword("")
  }

  function postLogin(event) {
      event.preventDefault();
      let request = {
        "username": userName,
        "password": password
      }
      console.log(request)
    axios.post('/api/login', request).then(result => { 
      console.log("login successful")
      history.push('/quiz')
    }).catch(err => console.log(err),
      setIsError(true),
      clearForm()
    )
  }

  function onHandleUserName(event){
    //console.log(event.target.value.trim().toLowerCase())
    setIsError(false)
    setUserName(event.target.value.trim().toLowerCase())
  }

  function onHandlePassword(event){
    //console.log(event.target.value.trim().toLowerCase())
    setIsError(false)
    setPassword(event.target.value.trim().toLowerCase())
  }

    return (
  
       <div className="flex flex-col justify-center items-center bg-gray-300" style={{height:"92vh"}}>
        <Header/>
        <Form  
        clearForm={clearForm}
        onHandleUserName={onHandleUserName} 
        onHandlePassword={onHandlePassword}
        postLogin={postLogin}
        style={{ opacity : isError ? "1" : "0" }}
        />
        </div>
      );
}

export default Login;