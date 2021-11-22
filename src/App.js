import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return (
    
    <div>
      <header>

        <h1>CPSC 471 Website</h1>

      </header>   
      <form class = "form">    
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

