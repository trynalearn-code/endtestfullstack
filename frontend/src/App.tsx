import Footer from "./Footer"
import Header from "./Header"
import Login from "./Login"
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import Register from "./Register"
import Home from "./Home"

import "./style.css"

function App() {
  return (
    <>
    <div>
      <Header />
    </div>
    <main>
      <BrowserRouter>
        <nav >
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>

        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </main>
    <footer>
      < Footer />
    </footer>
    </>
  )
}

export default App
