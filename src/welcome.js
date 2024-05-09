import bgImage from "./bg-image.png"
export default function WelcomeMessage (){
    return (
        <div className="welcome-section">
            <div className="area-text">
                <h1><span>LOGILYNX</span>: Where Landing Pages Ignite Conversions</h1>
                <h2>Your business needs an attractive landing page, we can make it for you :)</h2>
                <button className="button">Get Started !</button>
            </div>
            <div className="area-image">
                <img src={bgImage}></img>
            </div>
        </div>
    )
}