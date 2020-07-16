import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Header from "../component/Header"
import SignUpForm from "../component/SignupForm"

function SignUp(){

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isError, setIsError] = useState(false);

  let history = useHistory();

  function clearForm() {
    document.getElementById("signupform").reset();
    setUserName("")
    setPasswordOne("")
    setPasswordTwo("")
  }

  function postSignUp(event) {
    event.preventDefault();
    if (passwordOne === passwordTwo) {
        setPassword(passwordOne)
        event.preventDefault();
        let request = {
        "username": userName,
        "password": password
      }
      console.log(request)
      axios.post('/api/user', request).then(result => { 
        console.log(result)
        history.push('/quiz')
      })
      .catch(err => console.log(err), 
        setIsError(true),
        clearForm()
      )
      }
      else {
          console.log(passwordOne)
          console.log(passwordTwo)
          setIsError(true)
          clearForm()
      }
}

function onHandleUserName(event){
    setUserName(event.target.value.trim().toLowerCase())
  }

  function onHandlePasswordOne(event){
    setPasswordOne(event.target.value.trim().toLowerCase())
}

function onHandlePasswordTwo(event){
    setPasswordTwo(event.target.value.trim().toLowerCase())
}

    return (
       <div className="flex flex-col justify-center items-center bg-gray-300 f-full" style={{height:"92vh"}}>
        <Header />
        <SignUpForm 
        onHandleUserName={onHandleUserName} 
        onHandlePasswordOne={onHandlePasswordOne}
        onHandlePasswordTwo={onHandlePasswordTwo}
        postSignUp={postSignUp}
        style={{ opacity : isError ? "1" : "0" }}
        />
        </div>
      );
}

export default SignUp;