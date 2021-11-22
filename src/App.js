import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {

  const ssss = {
      textAlign: 'center',
      color: 'blue'
  };

  return (
 
    <div>

      <header >

        <h1 style={ssss}>CPSC 471 Website</h1>

      </header>   
      <form class = "form" style={ssss}>    
        <section id="loginUser">
          
          <label for="username">Username</label>
          <input id="username" name="username" type="text" />

        </section>

        <section id="loginPass">
          <label for="password">Password</label>
          <input id="password" name="password" type="text" />
        </section>

        <section id="login">
          <input type="submit" value="Login" />
        </section>
      </form>

    </div>

  );
}

export default App;

