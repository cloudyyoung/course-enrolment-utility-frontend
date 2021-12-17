
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/SignIn";
import Register from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

