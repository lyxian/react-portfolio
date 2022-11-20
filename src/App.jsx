import React, { Component } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <img src="https://codetheweb.blog/assets/img/icon2.png" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat
          libero eget magna commodo, quis pharetra tellus pretium. Sed viverra
          ante in mauris finibus dapibus. Maecenas congue dapibus nulla, eu
          gravida orci consequat eu. Phasellus nec nunc malesuada, aliquam massa
          ac, accumsan metus. Fusce sed dignissim lectus. Nunc elit tellus,
          sollicitudin ac accumsan ut, egestas et dui. Maecenas aliquam est a
          ligula scelerisque, in aliquam neque sodales. Nullam condimentum
          euismod dictum. Curabitur non ex elementum, pretium enim ut, ornare
          ipsum.
        </p>
      </main>
    </div>
  );
}

export default App;
