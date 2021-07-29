import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped';

function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Frontend Developer", "Backend Developer", "Fullstack Javascript"]
        })
    }, [])

    return (
        <div id="intro" className="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man2.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Abdul Syukur</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
