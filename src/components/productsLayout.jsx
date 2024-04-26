import {Link, Outlet} from "react-router-dom"
export default function ProductsLayout () {
    return (
        <>
            <Link to="">Landing Pages</Link>
            <Link to="">Full-length Website</Link>
            <Link to="">Logo designs</Link>
            <Outlet />
        </>
    )
}