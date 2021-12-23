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
                if (res.status !== 200) {
                    console.log("Signed out");
                    localStorage.removeItem("user_id");
                    localStorage.removeItem("email");
                    localStorage.removeItem("type");
                    localStorage.clear();
                } else {
                    localStorage.setItem("user_id", res.data.user_id);
                    localStorage.setItem("email", res.data.email);
                    localStorage.setItem("type", res.data.type);
                }
            });
    }

    componentDidMount() {
        this.authenticate();
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