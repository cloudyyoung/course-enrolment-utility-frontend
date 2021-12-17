import React from 'react';


//the style for the title of the website
const ssss = {
    textAlign: 'center',
    color: 'blue'
};

//function that returns the HTML code 
const Login = () => {

  
    return (
        <div>

        <header >
    
            <h1 style={ssss}>CPSC 471 Website for Group 76</h1>
    
        </header>   

            {/*
            *This is the place for the user to login
            */}
        <form class = "form" style={{textAlign: 'center'}}>    
            <section id="loginUser">
            
                <label for="username">Username</label>
                <input id="username" name="username" type="text" maxlength="20" minlength="5"/>
    
            </section>
    
            <section id="loginPass">
                <label for="password">Password</label>
                <input id="password" name="password" type="password" maxlength="20" minlength="5"/>
            </section>
    
            <section id="login">
                <input type="submit" value="Login" />
            </section>
            <ul></ul>
        </form>

            {/*
            *This is the button that will take you to the page for register an account
            */}
            <nav>
                <div style={{textAlign: 'center'}}>
                    <a href="/Register">Register</a>
                </div>
            </nav>
    
        </div>
    );

    
}

export default Login;