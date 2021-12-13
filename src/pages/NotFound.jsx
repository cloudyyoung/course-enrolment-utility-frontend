import React from "react";
//import Login from '/Login.js';

/*
 *This page is the 404 page with a button that will take you back to the login page
 */

const NotFound = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>404 NOT FOUND! Something is WRONG!</h1>

               
            <a href="/">This will take you back to the login page!</a>
         

        </div>
    );
};

export default NotFound;
