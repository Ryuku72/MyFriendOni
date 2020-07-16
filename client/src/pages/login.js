import React, {useState } from 'react';
import { useHistory } from "react-router-dom";
import Form from "../component/Form"
import axios from "axios";
import Header from "../component/Header"

function Login(){
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  let history = useHistory();

  function postLogin(event) {
      event.preventDefault();
      let request = {
        username: userName,
        password: password
      }
    axios.post('/api/login', request).then(result => { 
      history.push('/quiz')
    })
    .catch( err => 
      setError(true)
      )
    }
  function onHandleUserName(event){
    console.log(event.target.value.trim().toLowerCase())
    setUserName(event.target.value.trim().toLowerCase())
  }

  function onHandlePassword(event){
    console.log(event.target.value.trim().toLowerCase())
    setPassword(event.target.value.trim().toLowerCase())
  }

    return (
  
       <div className="flex flex-col justify-center items-center bg-gray-300" style={{height:"92vh"}}>
        <Header/>
        <Form  
        onHandleUserName={onHandleUserName} 
        onHandlePassword={onHandlePassword}
        postLogin={postLogin}
        />
        </div>
      );
}

export default Login;