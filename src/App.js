
import React from "react";
import Login from "./Login.js";
import Reg from "./Reg.js";

function App() {
    return (
        <div className="LoginHere">
            <Login />
            <div className="Register" style={{ textAlign: "center" }}>
                <h3>Click here to register for an acccount</h3>
                <Reg />
            </div>
        </div>
    );
}

export default App;

