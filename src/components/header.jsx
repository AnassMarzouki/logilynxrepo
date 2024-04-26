
import logo from "../logilynx_small.png"
import {NavLink} from "react-router-dom"

export default function Header () {
    return (
        <div className="logo-navbar">
                <img src={logo} alt="logilynx logo"></img>
                <nav className="navbar">
                    <NavLink to="/" className = {({isActive}) => isActive ? "active-nav" : ""}>Home</NavLink>
                    <NavLink to="/portfolio" className = {({isActive}) => isActive ? "active-nav" : ""}>About</NavLink>
                    <NavLink to="/products" className = {({isActive}) => isActive ? "active-nav" : ""}>Products</NavLink>
                    <NavLink to="/pricing" className = {({isActive}) => isActive ? "active-nav" : ""}>Pricing</NavLink>
                    <NavLink to="/contact" className = {({isActive}) => isActive ? "active-nav" : ""}>Contact Us</NavLink>
                </nav>
            </div>
    )
}