import React, { useState } from 'react'
import "./contact.scss"

function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }

    return (
        <div id="contact" className="contact">
            <div className="left">
                <img src="assets/contact.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit"> Send </button>
                    {message && <span>Thanks, I'll reply</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
