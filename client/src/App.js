import React, { useState} from 'react';
import Login from "./pages/login"
import Signup from "./pages/signup"
import Quiz from "./pages/quiz"
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
    </>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
