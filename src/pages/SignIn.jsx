import React from "react";

//function that returns the HTML code 
const SignIn = () => {
    return (
        <div className="container is-max-desktop" style={{ "max-width": "20rem" }}>
            <header>
                <h1 className="is-size-3 has-text-centered">Sign In</h1>
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
                    <button className="button is-primary">Sign In</button>
                </div>
            </div>

            <nav>
                <div className="has-text-centered">
                    <a href="/signup">Sign up an account here</a>
                </div>
            </nav>

        </div>
    );
};

export default SignIn;