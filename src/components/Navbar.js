import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";



const Navbar = ({setToken}) => {
    const logOutHandler = () => {
        setToken("");
        localStorage.clear();
    };
     return (
    <nav className="nav">
      <Link to="home" className="site-title">
        Food & Drink App
      </Link>
      <ul>
        <CustomLink to="/home">Searh All</CustomLink>
        <CustomLink to="/cake">Cake</CustomLink>
        <CustomLink to="/drink">Drink</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
      <button className="log-out-btn" onClick={()=>logOutHandler()}>LOGOUT</button>


    </nav>
  )
  }

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default Navbar