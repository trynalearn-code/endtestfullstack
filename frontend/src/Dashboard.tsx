
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
    <p>Includes a Log out button that clears localStorage and returns the user to the login page.</p>
    <button onClick={clear}>Log Out</button>
    </>
  )
}

export default Dashboard