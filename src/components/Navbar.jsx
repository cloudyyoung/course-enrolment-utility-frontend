import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            type: ""
        };
    }

    componentDidMount() {
        this.setState({ email: localStorage.getItem("email") });
        this.setState({ type: localStorage.getItem("type") });
    }

    render() {
        return (
            <nav className="navbar is-transparent has-shadow">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">Ucalgary</a>
                        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="/tree">Course Tree</a>
                            <a className="navbar-item" href="/list">Course List</a>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                {
                                    !this.state.email && 
                                    <div className="buttons">
                                        <a className="button is-primary" href="/signup">
                                            <strong>Sign up</strong>
                                        </a>
                                        <a className="button is-light" href="/signin">
                                            Sign in
                                        </a>
                                    </div>
                                }
                                {
                                    this.state.email &&
                                    <div className="buttons">
                                        <a className="button is-light" href="/">
                                            {this.state.email}
                                        </a>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Navbar;