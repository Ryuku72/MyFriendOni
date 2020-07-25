import React, {useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";
import { useAuth } from "../utils/auth";
import Footer from '../components/Footer';
import API from '../utils/API';

function Login(props){
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false)
  const { setAuthTokens } = useAuth();

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
      //console.log(request)
    API.loginUser(request)
    .then(result => { 
      //console.log(result)
      if (result.status === 200) {
        setAuthTokens(result.data);
        console.log("login successful")
        history.push('/quiz')
      } else {
        setIsError(true);
      }
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

  const existingTokens = localStorage.getItem("tokens");
  if ((existingTokens === "undefined") || (existingTokens === null)) {

    return (
  
      <div className="h-screen flex flex-col justify-center items-center bg-gray-300">
       <Header/>
       <Form  
       clearForm={clearForm}
       onHandleUserName={onHandleUserName} 
       onHandlePassword={onHandlePassword}
       postLogin={postLogin}
       style={{ opacity : isError ? "1" : "0" }}
       />
       <Footer>
         <div></div>
         </Footer> 
       </div>
     );
  
    } else {
      return <Redirect to="/quiz" />;
    }     
}

export default Login;