import React, {useState, useEffect } from 'react';
import API from "../utils/API";
import Form from "../component/Form"
import Header from "../component/Header"
import Wrapper from "../component/Wrapper"

function Login(){

    return (
       <div className="flex flex-col justify-center items-center bg-gray-300" style={{height:"92vh"}}>
        <Header />
        <Form />
        </div>
      );
}

export default Login;