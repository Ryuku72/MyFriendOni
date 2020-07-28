import React, {useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from '../components/Footer';
import API from '../utils/API';

function Login(props){

  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false)
  const [errors, setErrors] = useState([]);

  function clearForm() {
    document.getElementById("loginform").reset();
    setUserName("")
    setPassword("")
  }

  function postLogin(event) {
    event.preventDefault();

    if ((userName === "") && (password === "")){
      let errorMsg = "Both feilds are _blank"
      setErrors([...errorMsg])
      setIsError(true);
    }
    else if (userName === "") {
      let errorMsg = "Username is _blank"
      setErrors([...errorMsg])
      setIsError(true);
    } 
        else if (password === "") {
        let errorMsg = "Password is _blank"
        setErrors([...errorMsg])
        setIsError(true);
    } else {

     
      let request = {
        "username": userName,
        "password": password
      }
      //console.log(request)
    API.loginUser(request)
    .then(result => { 
        const userID = result.data.data._id
        localStorage.setItem("tokens", userID)
        history.push('/quiz')
    }).catch(err => {
      console.log(err.response);
      if (err.response.data.errors){
        const errorMsg = err.response.data.errors.map(
          (err) => err.msg
        );
        setErrors([...errorMsg]);
        setIsError(true);
        clearForm()
      } else {
        setErrors(['Whoops please enter your credentials']);
        setIsError(true);
        clearForm()
      }
    })
  }
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
      <div className="h-screen flex flex-col justify-center items-center bg-gray-300">
       <Header/>
       <Form  
       clearForm={clearForm}
       onHandleUserName={onHandleUserName} 
       onHandlePassword={onHandlePassword}
       postLogin={postLogin}
       style={{ opacity : isError ? "1" : "0" }}
       errorMessage={errors}
       />
       <Footer>
         <div></div>
         </Footer> 
       </div>
     ); 
}

export default Login;