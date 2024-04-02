/*
Name: Wenjie Zhou
Student ID: 301337168
Date: 2024-04-02
*/

import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "./StudentForm";
import "./index.css";

// Consume StudentForm component and expose it in webpack.config.js
const App = () => (
  <div className="container">
    <h3>This is Student Application 1</h3>
    <br />
    <StudentForm />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
