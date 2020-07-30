import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import SignUpForm from "../components/SignupForm";
import Footer from '../components/Footer';
import API from '../utils/API';
import Subheading from '../components/Subheading';
import "../index.css"

function SignUp(props){
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState([]);

  function clearForm() {
    document.getElementById("signupform").reset();
    setUserName("")
    setPasswordOne("")
    setPasswordTwo("")
    setErrors([])
  }

  function postSignUp(event) {
    event.preventDefault();
    
    let request = {
        "username": userName,
        "password": passwordOne,
        "password_again": passwordTwo
      }
    if (passwordOne !== passwordTwo) {
      let errorMsg = "Passwords don't match!"
      setErrors([errorMsg])
      setIsError(true);
    } else {
      API.createUser(request)
      .then((result) => {
          const userID = result.data.data._id
          localStorage.setItem("tokens", userID) 
          history.push('/quiz')
      })
      .catch((err) => {
        console.log(err.response.data);
        const errorMsg = err.response.data.errors.map((err) => err.msg);
        setErrors([...errorMsg]);
        setIsError(true);
      })
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
       <div className="xl:flex flex-col justify-center items-center md:block bg-gray-300 w-full h-screen">
        <Header />
        <Subheading />
        <div className="xl:w-1/2 sm:w-full p-4 bg-gray-300">
        <SignUpForm 
        onHandleUserName={onHandleUserName} 
        onHandlePasswordOne={onHandlePasswordOne}
        onHandlePasswordTwo={onHandlePasswordTwo}
        postSignUp={postSignUp}
        style={{ opacity : isError ? "1" : "0" }}
        errors={errors}
        clearForm={clearForm}
        />
        </div>
          <Footer>
         <div></div>
         </Footer> 
        </div>
        
      );
}
export default SignUp;