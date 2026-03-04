import React from 'react'

const Dashboard = ({name, password, email}) => {
  return (
    <>
      <h2>Dashboard</h2>
      <h2>Name:{name}</h2>
      <h2>Password:{password}</h2>
      <h2>Email:{email}</h2>
      <h2>Congratulation Your Data is here......</h2>
    </>
  );
}

export default Dashboard