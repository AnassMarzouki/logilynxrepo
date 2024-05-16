
import logo from "../logilynx_small.png"
import {NavLink, useNavigate} from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header () {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="logo-navbar">
                <div className="drop-menu">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={ () => {handleClose(); navigate("/")}}>Home</MenuItem>
                        <MenuItem onClick={ () => {handleClose(); navigate("/portfolio")}}>Portfolio</MenuItem>
                        <MenuItem onClick={ () => {handleClose(); navigate("/pricing")}}>Pricing</MenuItem>
                        <MenuItem onClick={ () => {handleClose(); navigate("/about-us")}}>About Us</MenuItem>
                        <MenuItem onClick={ () => {handleClose(); navigate("/contact-us")}}>Contact Us</MenuItem>
                        <MenuItem onClick={ () => {handleClose(); navigate("/FAQs")}}>FAQs</MenuItem>
                        
                    </Menu>
                </div>
                <img src={logo} alt="logilynx logo" className="logilynx-logo" onClick={()=> navigate("/")}></img>
                <nav className="navbar">
                    <NavLink to="/" className = {({isActive}) => isActive ? "active-nav" : ""}>Home</NavLink>
                    <NavLink to="/portfolio" className = {({isActive}) => isActive ? "active-nav" : ""}>Portfolio</NavLink>
                    <NavLink to="/pricing" className = {({isActive}) => isActive ? "active-nav" : ""}>Pricing</NavLink>
                    <NavLink to="/about-us" className = {({isActive}) => isActive ? "active-nav" : ""}>About Us</NavLink>
                    <NavLink to="/contact-us" className = {({isActive}) => isActive ? "active-nav" : ""}>Contact Us</NavLink>
                    <NavLink to="/FAQs" className = {({isActive}) => isActive ? "active-nav" : ""}>FAQs</NavLink>
                </nav>
            </div>
    )
}