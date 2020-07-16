import React, {useState, useEffect } from 'react';
import API from "../utils/API";
import Header from "../component/Header"
import SignUpForm from "../component/SignupForm"

function SignUp(){

    return (
       <div className="flex flex-col justify-center items-center bg-gray-300 f-full" style={{height:"92vh"}}>
        <Header />
        <SignUpForm />
        </div>
      );
}

export default SignUp;