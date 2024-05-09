import { NavLink } from "react-router-dom";

export default function PageNotFound () {
    return (
        <>
            <h1> Page Not Found </h1>
            <NavLink to="/">Return Home</NavLink>
        </>
    )
}