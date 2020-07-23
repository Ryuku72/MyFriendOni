import React, { useState} from 'react';
import Login from "./pages/login"
import Signup from "./pages/signup"
import Quiz from "./pages/quiz"
import Study from "./pages/study"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./utils/auth";
import PrivateRoute from "./PrivateRoute"


function App() {
  const existingTokens = localStorage.getItem("tokens");
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
   // console.log(data)
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
    <>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <PrivateRoute path="/quiz" component={Quiz} />
    <PrivateRoute path="/study" component={Study} />
    </>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
