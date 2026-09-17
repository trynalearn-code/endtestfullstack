import { useState } from 'react'

function Login() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(e:any) {
        setName(e.target.value);
        setPassword(e.target.value);
    }
    function saveLocal(){
        localStorage.setItem(username, "user");
        localStorage.setItem(password, "password");
    }

    return (
        <>
            <h1>Login Page</h1>
            <form >
                <label>username:
                    <input type="text" value={username} onChange={handleChange}/>
                </label>
                <label>password:
                    <input type="text" />
                </label>
                <button onClick={saveLocal}>Login</button>
            </form>
        </>
    )
}

export default Login