import React from 'react';
/*
 *This page is the page for the user to register for an account
 */
const Register = () => {
    

    return (
        <div>

        <header >
    
            <h1 style={{textAlign: 'center'}}>Register for an account</h1>
    
        </header>   

            {/*
            *This is the place to register for an account
            */}
        <form class = "form" style={{textAlign: 'center'}}>    
            <section id="RegisterUsername">
            
                <label for="RegUsername">Username</label>
                <input id="RegUsername" name="username" type="text" maxlength="20" minlength="5"/>
    
            </section>
    
            <section id="RegisterPassword">
                <label for="RegPassword">Password</label>
                <input id="RegPassword" name="password" type="password" maxlength="20" minlength="5"/>
            </section>
    
            <section id="Reg">
                <input type="submit" value="Register" />
            </section>
        </form>
        <ul></ul>
            {/*
            *This is the button that takes you back to the login page
            */}
            <nav>
                <div style={{textAlign: 'center'}}>
                    <a href="/">Already got an accout? Login here!</a>
                </div>
            </nav>
    
        </div>
    );

}

export default Register;