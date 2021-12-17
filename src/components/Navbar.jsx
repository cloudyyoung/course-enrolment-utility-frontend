import React from "react";

export default function Navbar() {
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
                            <div className="buttons">
                                <a className="button is-primary" href="/signup">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light" href="/signin">
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
