
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import TreeDiagram from "./pages/TreeDiagram";
import Navbar from "./components/Navbar";
import Statistics from "./pages/Statistics";

import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={TreeDiagram} />
                    <Route exact path="/tree" component={TreeDiagram} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/statistics" component={Statistics} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

