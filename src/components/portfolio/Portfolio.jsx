import React, { useEffect, useState } from 'react'
import "./portfolio.scss"
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio } from "../../data/main-data";
import PortfolioList from '../portfolioList/PortfolioList';

function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio)
                break;
            default:
                setData(featuredPortfolio)
                break;
        }
    }, [selected])

    return (
        <div id="portfolio" className="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        key={item.id}
                    />
                ))}

            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" key={d.id}>
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Portfolio
