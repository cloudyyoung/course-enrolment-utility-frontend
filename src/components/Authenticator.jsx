import React from "react";
import axios from "axios";

class Authenticator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    authenticate() {
        axios.get("/api/account")
            .then(res => {
                if (res.data.error) {
                    console.log("error");
                    localStorage.removeItem("email");
                }
            });
    }

    render() {
        return (
            <div>
                {this.authenticate()}
            </div>
        );
    }
}

export default Authenticator;