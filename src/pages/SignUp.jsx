import React from "react";
/*
 *This page is the page for the user to register for an account
 */
const Register = () => {


    return (
        <div className="container is-max-desktop" style={{ "max-width": "20rem" }}>
            <header>
                <h1 className="is-size-3 has-text-centered">Sign Up</h1>
            </header>

            <div className="form">
                <div id="username" className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input id="username" name="username" type="text" className="input" />
                    </div>
                </div>

                <section id="password" className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input id="password" name="password" type="password" className="input" />
                    </div>
                </section>

                <div id="submit">
                    <button className="button is-primary">Register</button>
                </div>
            </div>

            <nav>
                <div className="has-text-centered">
                    <a href="/">Already got an accout? Login here!</a>
                </div>
            </nav>

        </div>
    );

};

export default Register;