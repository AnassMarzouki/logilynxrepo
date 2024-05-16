import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"
import image6 from "./image6.jpg"

export default function Portfolio () {
    const cards = [
        {title:"PyGeoRS", description:"A landing page dedicated to the PyGeoRS QGIS Plugin", image:image1, link:"https://pygeors.netlify.app/"},
        {title:"Visit Figuig", description:"Discover the must visit places in Figuig Oasis", image:image2, link:"https://visitfiguig.netlify.app/"},
        {title:"Paper Rock Scior", description:"Simple Scisor Paper Rock Game", image:image3, link:"https://gamebyanass.netlify.app/"},
        {title:"Movie WatchList", description:"Movies WatchList app to save your must watch movies", image:image4, link:"https://banditwl.netlify.app/"},
        {title:"Unit converter", description:"Imperial / Metric units converter", image:image5, link:"https://unit-conv-by-anassbandit.netlify.app/"},
        {title:"Card Game", description:"War Game Card", image:image6, link:"https://cardgamebyanassbandit.netlify.app/"}
        ]

    const listCards = cards.map((element)=> {
        return (
            <div className="card" onClick={()=> window.open(element.link)}>
                <img src={element.image} alt=""></img>
                <p><b>{element.title}</b></p>
                <p>{element.description}</p>
            </div>
        )
    })
    return (
        <div className="portfolio-section">
            {listCards}
           
        </div>
    )
}