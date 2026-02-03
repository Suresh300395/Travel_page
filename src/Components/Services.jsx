import { useNavigate } from "react-router-dom";
import './Services.css';
import Card from "./Card";
function Services() {
    const cardsData = [
        {
            id: 1,
            image: "/service_1.png",
            title: "Adventure Tours",
            description: "Thrilling Guided tours filled with adventure and excitement.",
        },
        {
            id: 2,
            image: "/service_2.png",
            title: "Luxury Vactions",
            description: "Indulge in the finest resorts and exclusive amenities.",
        },
        {
            id: 3,
            image: "/service_3.png",
            title: "Family Gateways",
            description: "Fun-filled Vacations designed for families of all sizes.",
        },
        {
            id: 4,
            image: "/service_4.png",
            title: "Honeymoon Trips",
            description: "Romantic and unforgettable destinations for newlyweds.",
        },
        {
            id: 5,
            image: "/service_5.png",
            title: "Cultural Experiences",
            description: "Discover the rich history and treditions of new cultures.",
        },
        {
            id: 6,
            image: "/service_6.png",
            title: "Group Tours",
            description: "Enjoy cost-effective trips with a group of fellow travelers.",
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
                    <h1 className="h1 fw-bold">Our Services</h1>
                    <p className="h4">Explore the world with our tailored travel experiences.</p>
                </div>
            </div>
        </div>

        <div id="services">
            <div className="container-fluid services pb-lg-5">
                <div className="section-title w-75 mx-auto">
                    <p className=''>Our <span className=''>Services</span></p>
                </div>
                <div className="card-container">
                    {cardsData.map((card) => (
                        <Card
                            key={card.id}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>

        <div id="ready_for_adventure">
            <div className="">
                <div class="section-title w-75 mx-auto">
                <span className='ready_for_adventure'>Ready for Your Next Adventure?</span>
            </div>
            <p className="h5 text-center mt-4">Contact us today to start planing your dream vacaation!</p>
            <button className="contact_us">Contact Us</button>
        </div>
    </div>
    </div >
}
export default Services;