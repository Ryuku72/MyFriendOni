import React, { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import Header from "../components/Header";
import SignUpForm from "../components/SignupForm";
import Footer from '../components/Footer';
import API from '../utils/API';

function SignUp(props){
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState([]);
  
  //const referrer = props.location.state.referrer || '/';

  function clearForm() {
    document.getElementById("signupform").reset();
    setUserName("")
    setPasswordOne("")
    setPasswordTwo("")
  }

  function postSignUp(event) {
    event.preventDefault();
    
    let request = {
        "username": userName,
        "password": passwordOne,
        "password_again": passwordTwo
      }
    if (passwordOne !== passwordTwo) {
      return setErrors(['Passwords do not match!'])
    }
      API.createUser(request)
      .then((result) => { 
          history.push('/quiz')
      })
      .catch((err) => {
        console.log(err.response);
        const errorMsg = err.response.data.errors.map(err => err.msg);
        setErrors([...errorMsg]);
        setIsError(true);
        clearForm();
      })
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

const existingTokens = localStorage.getItem("tokens");
if ((existingTokens === "undefined") || (existingTokens === null)) {
    return (
       <div className="flex flex-col justify-center items-center bg-gray-300 f-full h-screen">
        <Header />
        <SignUpForm 
        onHandleUserName={onHandleUserName} 
        onHandlePasswordOne={onHandlePasswordOne}
        onHandlePasswordTwo={onHandlePasswordTwo}
        postSignUp={postSignUp}
        style={{ opacity : isError ? "1" : "0" }}
        errors={errors}
        />
          <Footer>
         <div></div>
         </Footer> 
        </div>
        
      );
}else {
return <Redirect to="/quiz" />;
}
}
export default SignUp;