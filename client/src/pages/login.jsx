import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../utils/API";
import Tengu from "../assets/img/onilogin.png"
import Subheading from "../components/Subheading";

function Login(props) {
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState([]);

  function clearForm() {
    document.getElementById("loginform").reset();
    setUserName("");
    setPassword("");
  }

  function postLogin(event) {
    event.preventDefault();

    if (userName === "" && password === "") {
      let errorMsg = "Both feilds are _blank";
      setErrors([...errorMsg]);
      setIsError(true);
    } else if (userName === "") {
      let errorMsg = "Username is _blank";
      setErrors([...errorMsg]);
      setIsError(true);
    } else if (password === "") {
      let errorMsg = "Password is _blank";
      setErrors([...errorMsg]);
      setIsError(true);
    } else {
      let request = {
        username: userName,
        password: password,
      };
      //console.log(request)
      API.loginUser(request)
        .then((result) => {
          const userID = result.data.data._id;
          localStorage.setItem("tokens", userID);
          history.push("/quiz");
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.data.errors) {
            const errorMsg = err.response.data.errors.map((err) => err.msg);
            setErrors([...errorMsg]);
            setIsError(true);
            clearForm();
          } else {
            setErrors(["Whoops please enter your credentials"]);
            setIsError(true);
            clearForm();
          }
        });
    }
  }

  function onHandleUserName(event) {
    //console.log(event.target.value.trim().toLowerCase())
    setIsError(false);
    setUserName(event.target.value.trim().toLowerCase());
  }

  function onHandlePassword(event) {
    //console.log(event.target.value.trim().toLowerCase())
    setIsError(false);
    setPassword(event.target.value.trim().toLowerCase());
  }

  return (
    <div className="h-screen w-full p-0 m-0 bg-gray-300 flex flex-col items-center overflow-y-auto">
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
        style={{ opacity: isError ? "1" : "0" }}
        errorMessage={errors}
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
    </div>
  );
}

export default Login;
