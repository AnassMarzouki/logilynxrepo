import lynxImage from "./notfoundimage.jpg"
import { useNavigate } from "react-router-dom";

export default function PageNotFound () {
    const navigate = useNavigate()
    return (
        <div className="notfound-section notfound-section-mobile">
            <img src={lynxImage} alt=""></img>
            <h3>This page has been eaten by our Lynx :(</h3>
            <button className="return-home-btn" onClick={ () =>  navigate("/")}>Return Home</button>
        </div>
    )
}