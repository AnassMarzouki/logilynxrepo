
import {useNavigate} from "react-router-dom"
import bgImage from "./lynx-img.png"
export default function WelcomeMessage (){
    const navigate= useNavigate ()
    return (
        <div className="welcome-section">
            <div className="area-text">
                <h1><span>LOGILYNX</span>: Where Landing Pages Ignite Conversions</h1>
                <h2>Your business needs an attractive landing page, we can make it for you :)</h2>
                <button onClick={ () => navigate('/pricing')} className="button">Get Started !</button>
            </div>

            <div className="area-image">
                <img className="home-lynx-image" src={bgImage} alt=""></img>
            </div>
        </div>
    )
}