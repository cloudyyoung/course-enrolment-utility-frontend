import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            confirmNewPassword: "",
            inputMajor:"",
            major: "",
            minor:""
        };

        this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
        this.handleConfirmNewPasswordChange = this.handleConfirmNewPasswordChange.bind(this);
        this.submitChangePassword = this.submitChangePassword.bind(this);
        this.handleChangeMajor = this.handleChangeMajor.bind(this);
        this.submitChangeMajor = this.submitChangeMajor.bind(this);
    }

    componentDidMount() {
        
    }

    handleNewPasswordChange(event) {
        this.setState({ newPassword: event.target.value });
    }

    handleConfirmNewPasswordChange(event) {
        this.setState({ confirmNewPassword: event.target.value });
    }

    handleChangeMajor(event) {
        this.setState({ inputMajor: event.target.value });
    }

    submitChangeMajor(event){
        event.preventDefault();
        const params = new URLSearchParams();

        //get the input major into a list
        let list = [];
        if (this.state.inputMajor != 0)
        {
            list.append(this.state.inputMajor);
        }
        
        params.append("major", list);
        params.append("minor", list);
        params.append("concentration", []);
        axios.put("/api/account/student", params)
        .then(res => {
            if (res.status !== 200) {
                console.log("error");
                toast.error(res.data.error.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                /*
                this.setState({ newPassword: "", confirmNewPassword: "" });
                toast.success("You successfully changed your password.", {
                    position: toast.POSITION.TOP_RIGHT
                });*/

                //if we did not add any major then we set major to empty
                if (res.data["major"].length == 0)
                {
                    this.setState({ major: "" });
                }
                this.setState({ major: res.data["major"][0], minor: "" });

            }
        })
            
        
    }

    submitChangePassword(event) {
        event.preventDefault();
        console.log(this.state.newPassword);
        console.log(this.state.confirmNewPassword);
        if (this.state.newPassword !== this.state.confirmNewPassword) {
            toast.error("Passwords do not match.", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            const params = new URLSearchParams();
            params.append("password", this.state.newPassword);
            axios.put("/api/account/password", params)
                .then(res => {
                    if (res.status !== 200) {
                        console.log("error");
                        toast.error(res.data.error.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    } else {
                        this.setState({ newPassword: "", confirmNewPassword: "" });
                        toast.success("You successfully changed your password.", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    componentWillUnmount() {
        toast.dismiss();
    }
    
    render() {
        return (
            
            <div className="container is-max-desktop" style={{ "max-width": "20rem" }}>
                <header>
                    <h1 className="is-size-3 has-text-centered">Major, Minor and Concentration</h1>
                </header>

                <div className="form">
                    <div id="username" className="field">
                        <label className="label">Enter major here</label>
                        <div className="control">
                            {/*This is now the box to enter your major*/}
                            <input id="major" list="major" name="major" type="text" className="input" value={this.state.inputMajor} onChange={this.handleChangeMajor} />
                            <datalist id="major">
                                <option value = "24768"></option>
                                <option value = "0"></option>
                            </datalist>
                        </div>
                    </div>

                    <section id="password" className="field">
                        <label className="label">Confirm new password</label>
                        <div className="control">
                            <input id="confirm_new_password" name="confirm_new_password" type="password" className="input" value={this.state.confirmNewPassword} onChange={this.handleConfirmNewPasswordChange} />
                        </div>
                    </section>

                    <div id="submit">
                        <button className="button is-primary" onClick={this.submitChangeMajor}>Change Major</button>
                    </div>
                </div>

                <div style={{ "height": "4rem" }}></div>

                <header>
                    <h1 className="is-size-3 has-text-centered">Change Password</h1>
                </header>

                <div className="form">
                    <div id="username" className="field">
                        <label className="label">New password</label>
                        <div className="control">
                            <input id="new_password" name="new_password" type="password" className="input" value={this.state.newPassword} onChange={this.handleNewPasswordChange} />
                        </div>
                    </div>

                    <section id="password" className="field">
                        <label className="label">Confirm new password</label>
                        <div className="control">
                            <input id="confirm_new_password" name="confirm_new_password" type="password" className="input" value={this.state.confirmNewPassword} onChange={this.handleConfirmNewPasswordChange} />
                        </div>
                    </section>

                    <div id="submit">
                        <button className="button is-primary" onClick={this.submitChangePassword}>Change Password</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;