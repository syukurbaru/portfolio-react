import React from 'react'
import "./testimonials.scss"

function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Ingrid Bergman",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/53492/ingrid-bergman-star-movie-actress-53492.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Marilyn Moroe",
            title: "Actrees Hollywood",
            img:
                "https://images.pexels.com/photos/53453/marilyn-monroe-woman-actress-pretty-53453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "James Stewart",
            title: "CEO of Man Person",
            img:
                "https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];


    return (
        <div id="testimonials" className="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"} key={d.id} >
                        <div className="top">
                            <img src="assets/right-arrow.png" alt="" className="left" />
                            <img src={d.img} alt="" className="user" />
                            <img src={d.icon} alt="" className="right" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
