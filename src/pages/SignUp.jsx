import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.submitSignUp = this.submitSignUp.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleConfirmPasswordChange(event) {
        this.setState({ confirmPassword: event.target.value });
    }

    submitSignUp(event) {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirmPassword);
        if (this.state.password !== this.state.confirmPassword) {
            toast.error("Passwords do not match.", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            const params = new URLSearchParams();
            params.append("email", this.state.email);
            params.append("password", this.state.password);
            axios.post("/api/account", params)


                .then(res => {
                    console.log(res.data);

                    if (res.data.error) {
                        console.log("error");
                        toast.error(res.data.error.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    } else {
                        window.location.href = "/tree";
                        toast.success("You are successfully signed up.", {
                            position: toast.POSITION.TOP_RIGHT
                        });

                        localStorage.setItem("email", this.state.email);
                        localStorage.setItem("type", res.data.type);

                    }
                });
        }
    }

    render() {
        return (
            <div className="container is-max-desktop" style={{ "max-width": "20rem" }}>
                <header>
                    <h1 className="is-size-3 has-text-centered">Sign Up</h1>
                </header>

                <div className="form">
                    <div id="username" className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input id="username" name="username" type="text" className="input" placeholder="Your @ucalgary.ca email" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                    </div>

                    <section id="password" className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input id="password" name="password" type="password" className="input" value={this.state.password} onChange={this.handlePasswordChange} />
                        </div>
                    </section>

                    <section id="password" className="field">
                        <label className="label">Confirm password</label>
                        <div className="control">
                            <input id="password" name="password" type="password" className="input" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} />
                        </div>
                    </section>

                    <div id="submit">
                        <button className="button is-primary" onClick={this.submitSignUp}>Sign Up</button>
                    </div>
                </div>

                <nav>
                    <div className="has-text-centered">
                        <a href="/signin">Already got an accout? Login here!</a>
                    </div>
                </nav>

            </div>
        );
    }
}

export default SignUp;