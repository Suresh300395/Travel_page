import { useState } from "react";
import './Portfolio.css'
import Gallary from "./Gallary";

const categories = ["All", "Europe", "Asia", "Tropical", "Cultural"];
function Portfolio() {
    const [active, setActive] = useState("All");
    const cardsInfo = [
        {
            id: 1,
            image: "/Santorini_Greece.png",
            title: "Santorini, Greece",
        },
        {
            id: 2,
            image: "/service_2.png",
            title: "Luxury Vactions",
        },
        {
            id: 3,
            image: "/service_3.png",
            title: "Family Gateways",
        },
        {
            id: 4,
            image: "/service_4.png",
            title: "Honeymoon Trips",
        },
        {
            id: 5,
            image: "/service_5.png",
            title: "Cultural Experiences",
        },
        {
            id: 6,
            image: "/service_6.png",
            title: "Group Tours",
        },
    ];
    return <div>
        <div id='Hero'>
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src="/bg_about_video.mp4" type="video/mp4" />
                </video>
                <div className="home-content text-center">
                    <h1 className="h1 fw-bold">Our Portfolio</h1>
                    <p className="h4">Discover the breathtaking moments from our travel adventures.</p>
                </div>
            </div>
        </div>

        {/* <div className="cat_card gap-4">
                <a href="#" >All</a>
                <div className="v-divider"></div>
                <a href="#" >Europe</a>
                <div className="v-divider"></div>
                <a href="#" >Aisa</a>
                <div className="v-divider"></div>
                <a href="#" >Tropical</a>
                <div className="v-divider"></div>
                <a href="#" >Cultural</a>
            </div> */}
        <div className="tabs-container">
            {categories.map((item, index) => (
                <div key={item} className="tab-wrapper">
                    <button
                        className={`tab-btn ${active === item ? "active" : ""}`}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </button>

                    {index !== categories.length - 1 && (
                        <span className="divider"></span>
                    )}
                </div>
            ))}
        </div>
        <p className="text-center fs-5 mb-5">Explore our photo Galleries from various destinations.</p>
        <div id="portfolio">
            <div className="container-fluid services pb-lg-5">
                    <div className="portfolio_card">
                        {cardsInfo.map((portfolio_card) => (
                            <Gallary
                                key={portfolio_card.id}
                                image={portfolio_card.image}
                                title={portfolio_card.title}
                            />
                        ))}
                    </div>
            </div>
        </div>
    </div>
}
export default Portfolio;