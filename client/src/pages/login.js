import React, {useState } from 'react';
import { Redirect } from "react-router-dom";
import { useAuth } from "../utils/auth";
import axios from 'axios';
import Form from "../component/Form"
import Header from "../component/Header"

function Login(props){
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin(event) {
      event.preventDefault();
    axios.post("https://www.somePlace.com/auth/login", {
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

  const referer = props.location.state.referer || '/';

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  function onHandleUserName(event){
    setUserName(JSON.stringify(event.target.value.trim().toLowerCase()))
  }

  function onHandlePassword(event){
    setPassword(JSON.stringify(event.target.value.trim().toLowerCase()))
  }


    return (
       <div className="flex flex-col justify-center items-center bg-gray-300" style={{height:"92vh"}}>
        <Header/>
        <Form  
        onHandleUserName={onHandleUserName} 
        onHandlePassword={onHandlePassword}
        postLogin={postLogin}
        isError={isError}
        Error={Error}
        />
        </div>
      );
}

export default Login;