import React from 'react';
import Login from "./pages/login"
import Signup from "./pages/signup"
import Quiz from "./pages/quiz"
import Footer from "./component/Footer"
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {

  return (
    <Router>
    <>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/quiz" component={Quiz} />
    </>
    <Footer />
    </Router>
  );
}

export default App;
