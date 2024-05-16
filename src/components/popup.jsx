import React from "react"
import {Navigate} from "react-router-dom"


export default function Popup () {
    const [btnClicked, setBtnClicked] = React.useState(false)
    return (
        <div className="pop-up pop-up-mobile">          
            <p>Message successfully sent</p>
            <button onClick={()=> {
                setBtnClicked(true)
            }}>return home</button>
            {btnClicked ? <Navigate to ="/" /> : null}
        </div>
    )
}

