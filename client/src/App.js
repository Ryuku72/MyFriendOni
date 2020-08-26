import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import GlobalStore from "./utils/GlobalStore";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Quiz from "./pages/quiz";
import Study from "./pages/study";
import About from "./pages/about";
import { Provider } from 'react-redux'
import store from './redux/store'


 function App() {
  
  return (
    <Router>
       <Provider store={store}> 
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/study" component={Study} />
          <Route path="/about" component={About} />
        </Switch>
       </Provider> 
    </Router>
  );
}

export default App;
