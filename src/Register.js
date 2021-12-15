import React from 'react';

const Register = () => {
    

    return (
        <div>

        <header >
    
            <h1 style={{textAlign: 'center'}}>Register for an account</h1>
    
        </header>   
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
    
        </div>
    );

}

export default Register;