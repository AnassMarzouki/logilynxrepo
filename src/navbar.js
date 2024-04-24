import logo from "./logilynx_small.png"
export default function Navbar (){
    return (
        <div className="logo-navbar">
            <img src={logo} alt="logilynx logo"></img>
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Contact us</li>
            </ul>
        </div>
    )
}