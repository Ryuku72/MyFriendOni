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
    <div className="mobile w-full p-0 m-0 bg-gray-300 flex flex-col items-center overflow-y-auto">
      <div className="w-full flex flex-col" style={{height:"22.5%"}}>
      <Header/>
      <Subheading />
      </div>
      <div className="flex justify-center items-center my-4" style={{height:"50%"}}>
      <div className="grid grid-cols-2 md:w-1/2">
      <div className="flex items-center">
      <Form
        clearForm={clearForm}
        onHandleUserName={onHandleUserName}
        onHandlePassword={onHandlePassword}
        postLogin={postLogin}
        style={{ opacity: isError ? "1" : "0" }}
        errorMessage={errors}
      />
      </div>
      <div className="w-full flex justify-center items-center">
       <img src={Tengu} alt="Tengu Teacher" className="w-full" style={{height:"80%"}}/>
       </div>
       </div>
       </div>
       <div className="flex items-center justify-start w-full text-center" style={{height:"12.5%"}}>
       <p className="w-full px-4 text-red-700 xl:font-semibold xl:text-base sm:text-xs">
         ...if your new please click 
         <span>
           <Link to="/signup" className="signup cursor-pointer xl:text-6xl md:text-4xl mx-6 text-green-600 hover:text-green-800">
             HERE!!!
             </Link></span></p>
       </div>
       <div className="flex items-end justify-end w-full" style={{height:"10%"}}>
       <Footer>
       <div></div>
     </Footer>
    </div>
    </div>
  );
}

export default Login;
