import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useAuth } from "../utils/auth";
import axios from 'axios';
import Header from "../component/Header"
import SignUpForm from "../component/SignupForm"

function SignUp(){

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const { setAuthTokens } = useAuth();

  function postSignUp(event) {
    event.preventDefault();
    if (passwordOne === passwordTwo) {
        setPassword(passwordOne)
        axios.post("https://www.somePlace.com/auth/signup", {
            userName,
            password
          }).then(result => {
            if (result.status === 200) {
              setAuthTokens(result.data);
              setLoggedIn(true);
            } else {
              setIsError(true);
            }
          }).catch(e => {
            setIsError(true);
          });
    } 
    setIsError(true);
}

if (isLoggedIn) {
  return <Redirect to="/quiz" />;
}

function onHandleUserName(event){
    setUserName(JSON.stringify(event.target.value.trim().toLowerCase()))
  }

  function onHandlePasswordOne(event){
    setPasswordOne(JSON.stringify(event.target.value.trim().toLowerCase()))
}

function onHandlePasswordTwo(event){
    setPasswordTwo(JSON.stringify(event.target.value.trim().toLowerCase()))
}

    return (
       <div className="flex flex-col justify-center items-center bg-gray-300 f-full" style={{height:"92vh"}}>
        <Header />
        <SignUpForm 
        onHandleUserName={onHandleUserName} 
        onHandlePasswordOne={onHandlePasswordOne}
        onHandlePasswordTwo={onHandlePasswordTwo}
        postSignUp={postSignUp}
        isError={isError}
        Error={Error}
        />
        </div>
      );
}

export default SignUp;