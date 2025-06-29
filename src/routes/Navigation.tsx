import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"

const Navigation = () => {
  return (
   <>
     <header className="header">
      <ul className="list-group">  
        <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "nav-active list-group-item" : "")}>Home</NavLink>
        </li>
      </ul>
    </header>
    <main className="container">
        <Routes>
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
    </main>
   </>
  )
}

export default Navigation
