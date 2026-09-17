import { useState } from "react";

function Dashboard() {
    const clear = () => {
    localStorage.clear();
  }

  return (
    <>
    <h1>Dashboard</h1>
    <h3>username: {}</h3>
    <h3>password: {}</h3>
    <h3>email: {}</h3>
    <button onClick={clear}>Log Out</button>
    </>
  )
}

export default Dashboard