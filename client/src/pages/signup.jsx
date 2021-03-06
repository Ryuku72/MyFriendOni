import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import { setError, clearError, newUser } from '../redux/actions/ui';
import Header from "../components/Header";
import SignUpForm from "../components/SignupForm";
import Footer from '../components/Footer';
import Subheading from '../components/Subheading';
import "../index.css"

function SignUp(props){
  let dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  useEffect(() => {
    if (props.ui.error === true){
      dispatch(clearError())
    }
// eslint-disable-next-line
  },[userName, passwordOne, passwordTwo])


  useEffect(() => {
    if (props.ui.error === true){
    setTimeout(()=>{
      if (props.ui.error === true){
      dispatch(clearError())
      }
    }, 3000)
    }
// eslint-disable-next-line
},[props.ui.error])

  function clearForm() {
    document.getElementById("signupform").reset();
    setUserName("")
    setPasswordOne("")
    setPasswordTwo("")
    dispatch(clearError())
  }

  function postSignUp(event) {
    event.preventDefault();
    
    let request = {
        "username": userName,
        "password": passwordOne,
        "password_again": passwordTwo
      }
    if (passwordOne !== passwordTwo) {
      let errorMsg = ["Passwords don't match"]
      dispatch(setError(errorMsg))
      setTimeout(()=>{
        dispatch(clearError())
      }, 3000)
    } else {
      dispatch(newUser(request))
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

if (props.ui.loggedIn === true) {
  return <Redirect to="/quiz" />;
}

else {
    return (
       <div className="flex flex-col justify-center items-center bg-gray-300 w-full h-screen">
         {props.ui.loading ? 
      <div className="sk-cube-grid">
      <div className="sk-cube sk-cube1"></div>
      <div className="sk-cube sk-cube2"></div>
      <div className="sk-cube sk-cube3"></div>
      <div className="sk-cube sk-cube4"></div>
      <div className="sk-cube sk-cube5"></div>
      <div className="sk-cube sk-cube6"></div>
      <div className="sk-cube sk-cube7"></div>
      <div className="sk-cube sk-cube8"></div>
      <div className="sk-cube sk-cube9"></div>
    </div>
   :
   <>
        <Header />
        <Subheading />
        <div className="xl:w-1/2 sm:w-full p-4 bg-gray-300">
        <SignUpForm 
        onHandleUserName={onHandleUserName} 
        onHandlePasswordOne={onHandlePasswordOne}
        onHandlePasswordTwo={onHandlePasswordTwo}
        postSignUp={postSignUp}
        style={{ opacity: props.ui.error ? "1" : "0" }}
        errors={props.ui.errorMsg}
        clearForm={clearForm}
        />
        </div>
          <Footer>
         <div></div>
         </Footer> 
    </>
}
       </div>
        
      );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
})

export default connect(mapStateToProps)(SignUp)