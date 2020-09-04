import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect, useDispatch } from 'react-redux'
import { logIn, clearError, setError, logOutRecieved } from '../redux/actions/ui';
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tengu from "../assets/img/onilogin.png"
import Subheading from "../components/Subheading";

function Login(props) {
  let dispatch = useDispatch()

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      dispatch(logOutRecieved())
    },500)
    return () => {
      dispatch(logOutRecieved())
    }
  },[])



  function clearForm() {
    document.getElementById("loginform").reset();
    setUserName("");
    setPassword("");
  }

  function postLogin(event) {
    event.preventDefault();
    if (userName === "" && password === "") {
      let errorMsg = "Both feilds are blank";
      dispatch(setError(errorMsg))
    } else if (userName === "") {
      let errorMsg = "Username is blank";
      dispatch(setError(errorMsg))
    } else if (password === "") {
      let errorMsg = "Password is blank";
      dispatch(setError(errorMsg))
    } else {
      let request = {
        username: userName,
        password: password,
      };
      //console.log(request)
      dispatch(logIn(request))
      clearForm();
    }
  }

  function onHandleUserName(event) {
    //console.log(event.target.value.trim().toLowerCase())
    dispatch(clearError())
    setUserName(event.target.value.trim().toLowerCase());
  }

  function onHandlePassword(event) {
    //console.log(event.target.value.trim().toLowerCase())
    dispatch(clearError())
    setPassword(event.target.value.trim().toLowerCase());
  }

  if (props.ui.loggedIn === true) {
    return <Redirect to="/quiz" />;
  }

  else {
  return (
    <div className="h-screen w-full p-0 m-0 bg-gray-300 flex flex-col items-center justify-center overflow-y-auto">
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
      <div className="w-full flex flex-col" style={{height:"18vh"}}>
      <Header/>
      <Subheading />
      </div>
      <div className="inline-flex my-4 xl:w-1/2 sm:w-full" style={{height:"55vh"}}>

      <div className="flex items-center justify-end mt-2 p-2 w-1/2" style={{height:"100%"}}>
      <Form
        clearForm={clearForm}
        onHandleUserName={onHandleUserName}
        onHandlePassword={onHandlePassword}
        postLogin={postLogin}
        style={{ opacity: props.ui.error ? "1" : "0" }}
        errorMessage={props.ui.errorMsg}
      />
      </div>
      <div className="w-1/2 flex items-center justify-center antialiased">
       <img src={Tengu} alt="Tengu Teacher" className="p-2 tenguTeacher" style={{height:"65%", width:"35vw"}}/>
       </div>
       </div>
       <div className="inline-flex justify-center items-end w-full text-center" style={{height:"5vh"}}>
       <div className="h-full">
       <p className="signUpPtag w-full h-full flex items-center px-4 text-gray-800 font-mono">
         ...if your new please click </p>
         </div>
         <div className="h-full w-1/5">
           <Link to="/signup" className="cursor-pointer h-full w-full flex items-center"><span className="signupFont flex items-center font-semibold text-pink-500 hover:text-purple-600" >HERE!!!</span></Link></div>
       </div>
       <div className="flex items-end justify-end w-full" style={{height:"15vh"}}>
       <Footer>
       <div></div>
     </Footer>
    </div>
    </>
  }
    </div>
  );
} 
}

const mapStateToProps = (state) => ({
  user: state.user,
  quiz: state.quiz,
  ui: state.ui
})

export default connect(mapStateToProps)(Login);
