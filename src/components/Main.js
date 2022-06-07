import React from "react"
import MainReactPic from "../pictures/reactjs_main.png"

export default function Main() {
    return (
        <div className="main-body" style={{backgroundImage: `url(${MainReactPic})`, backgroundRepeat: "no-repeat", backgroundPosition: "right 40%"}}>
            <h1 className="main-title">
            Fun Facts about React
            </h1>
            <ul className="fact-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands if enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}