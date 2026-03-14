import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("please fill all th fields");
    } else {
      alert("Form submitted successfully!");
    }
    let userDetails ={
      name,
      email,
      password
    }
    saveToDb(userDetails);
    
  };
  const saveToDb = (userDetails) => {
    // code to save userDetails to database
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">
          User Name
          <input
            type="text"
            id="username"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
