
import React from 'react';
import Login from './pages/Login.js';

import Register from './pages/Register.js';

import { BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import MainPage from './pages/index.jsx';
import NotFound from './pages/NotFound.jsx';



function App() {

    
 
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component={Login} />
          <Route exact path = "/Register" component={Register} />
          <Route path="/404" component={NotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
      /*
      <div className="LoginHere">
        <Login />
        <div className="Register" style={{textAlign: 'center'}}>
          <h3>Click here to register for an acccount</h3>
          <Reg />
        </div>
      </div>
      */
    );
}

export default App;

