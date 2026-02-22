import React from "react";
import { useState } from "react";
import Button from "./Button";
import Header from './Header'
import Accordian from "./Accordian";


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
   <>
    <Header/>
    <Accordian/>

    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        id=""
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button url="Submit" />
    </form>
    </>
  );
};

export default Form;
