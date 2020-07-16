import React, { useState } from 'react';
import Login from "./pages/login"
import Signup from "./pages/signup"
import Quiz from "./pages/quiz"
import Footer from "./component/Footer"
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { AuthContext } from "./utils/auth"

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
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
    <Footer />
    
    </AuthContext.Provider>
  );
}

export default App;
