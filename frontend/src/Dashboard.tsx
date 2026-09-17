import { useState } from "react";

function Dashboard() {
    const clear = () => {
    localStorage.clear();
  }
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  return (
    <>
    <h1>Dashboard</h1>
    <h3>username: {username}</h3>
    <h3>password: {password}</h3>
    <h3>email: {email}</h3>
    <button onClick={clear}>Log Out</button>
    </>
  )
}

export default Dashboard