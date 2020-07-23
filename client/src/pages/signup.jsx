import React, { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";
import axios from 'axios';
import Header from "../components/Header";
import SignUpForm from "../components/SignupForm";
import { useAuth } from "../utils/auth";
import Footer from '../components/Footer';

function SignUp(props){

  const [userName, setUserName] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();

  let history = useHistory();
  //const referrer = props.location.state.referrer || '/';

  function clearForm() {
    document.getElementById("signupform").reset();
    setUserName("")
    setPasswordOne("")
    setPasswordTwo("")
  }

  function postSignUp(event) {
    event.preventDefault();
    if (passwordOne === passwordTwo) {
        event.preventDefault();
        let request = {
        "username": userName,
        "password": passwordOne
      }
      console.log(request)
      axios.post('/api/users', request)
      .then(result => { 
        if (result.status === 200) {
            setAuthTokens(result.data);
            console.log("login successful")
            history.push('/quiz')
          } else {
            setIsError(true);
          }
      })
      .catch(err => console.log(err), 
        setIsError(true),
        clearForm()
      )
      }
      else {
         // console.log(passwordOne)
         // console.log(passwordTwo)
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