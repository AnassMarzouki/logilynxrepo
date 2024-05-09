
import logo from "../logilynx_small.png"
import {NavLink} from "react-router-dom"

export default function Header () {
    return (
        <div className="logo-navbar">
                <img src={logo} alt="logilynx logo"></img>
                <nav className="navbar">
                    <NavLink to="/" className = {({isActive}) => isActive ? "active-nav" : ""}>Home</NavLink>
                    <NavLink to="/services" className = {({isActive}) => isActive ? "active-nav" : ""}>Services</NavLink>
                    <NavLink to="/portfolio" className = {({isActive}) => isActive ? "active-nav" : ""}>Portfolio</NavLink>
                    <NavLink to="/pricing" className = {({isActive}) => isActive ? "active-nav" : ""}>Pricing</NavLink>
                    <NavLink to="/about-us" className = {({isActive}) => isActive ? "active-nav" : ""}>About Us</NavLink>
                    <NavLink to="/contact-us" className = {({isActive}) => isActive ? "active-nav" : ""}>Contact Us</NavLink>
                    <NavLink to="/FAQs" className = {({isActive}) => isActive ? "active-nav" : ""}>FAQs</NavLink>
                </nav>
            </div>
    )
}