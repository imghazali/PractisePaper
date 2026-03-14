import React from "react";

const HomePage = () => {
  const handleSubmit = (e) => {
    alert('your data is submitted successfully')
    e.preventDefault();
  };

  return (
    <div className="login-section">
      <form action='{<Dashboard/>}' onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name" />
        <input type="password" placeholder="Enter your password" />
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email address"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;
