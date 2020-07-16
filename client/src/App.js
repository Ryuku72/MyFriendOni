import React from 'react';
import Login from "./pages/login"
import Signup from "./pages/signup"
import Quiz from "./pages/quiz"
import Footer from "./component/Footer"
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { AuthContext } from "./utils/auth"
import Wrapper from './component/Wrapper';

function App() {
  return (
    <AuthContext.Provider value={false}>
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
