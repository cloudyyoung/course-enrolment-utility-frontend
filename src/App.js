
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import CourseTree from "./pages/CourseTree";
import Navbar from "./components/Navbar";
import Statistics from "./pages/Statistics";
import CourseList from "./pages/CourseList";
import Authenticator from "./components/Authenticator";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <Navbar />
            <ToastContainer />
            <Authenticator />
            <Router>
                <Switch>
                    <Route exact path="/" component={CourseTree} />
                    <Route exact path="/tree" component={CourseTree} />
                    <Route exact path="/list" component={CourseList} />
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

