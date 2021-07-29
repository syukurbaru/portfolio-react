import React from 'react'
import "./topBar.scss"
import { PhoneAndroid, Mail } from "@material-ui/icons";

function TopBar({ menuOpen, setMenuOpen }) {

    return (
        <div className={`topbar ${menuOpen ? "active" : ""}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        go!
                    </a>
                    <div className="itemContainer">
                        <PhoneAndroid className="icon" />
                        <span>+852 2666 0738</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>syukurbaru@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
