import { useNavigate } from 'react-router-dom';
import './Homepage.css';
function Homepage() {
    return <div>
        <div>
            <div className="bg_home_container">
                <div className="video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/bg_video_home.mp4" type="video/mp4" />
                    </video>

                    <div id='Home'>
                        <div className="home-content text-center">
                            <h1 className="h1 fw-bold">Welcome to Our Trav Website</h1>
                            <p className="h5">We provide the best travel solutions for your Travling</p>
                            <a href='#Popular_destinations'><button href="#" className="btn btn-success">Get Started</button></a>
                        </div>
                    </div>

                    <div className="search_card d-flex flex-row justify-content-center align-items-center gap-3">
                        <select className="myselect">
                            <option>Where to?</option>
                            <option>Hydrabad</option>
                            <option>Chennai</option>
                            <option>Delhi</option>
                        </select>

                        <select className="myselect">
                            <option>Check in</option>
                        </select>


                        <select className="myselect">
                            <option>Check Out</option>
                        </select>

                        <select className="myselect">
                            <option>Travels</option>
                            <option>MakeMyTrip</option>
                            <option>Yatra</option>
                            <option>Cleartrip</option>
                            <option>Goibibo</option>
                            <option>EaseMyTrip</option>
                            <option>Thomas Cook India</option>
                            <option>SOTC Travel</option>
                            <option>IRCTC Tourism</option>
                            <option>Cox & Kings (classic name, tours)</option>
                            <option>Club Mahindra Holidays</option>
                        </select>
                        <button className="btnn">Search &nbsp;<i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>


                <div className="self-container d-flex flex-row justify-content-center gap-4 mt-5 mb-5">
                    <div className="adveture_card d-flex flex-row gap-3">
                        <div className='col-4'>
                            <img src="adventure.jpg" alt="Adventure" className="adventure_img1" />
                        </div>
                        <div className='col-8'>
                            <h5 className="adventure_title">Adventure Tours</h5>
                            <p className="adventure_text">Exciting guided tours around the globe</p>
                        </div>
                    </div>



                    <div className="adveture_card d-flex flex-row gap-3">
                        <div className='col-4'>
                            <img src="price.png" alt="Adventure" className="adventure_img2" />
                        </div>
                        <div className='col-8'>
                            <h5 className="adventure_title">Best Price Gaurentee</h5>
                            <p className="adventure_text">Best Deals at unbeatable prices</p>
                        </div>
                    </div>



                    <div className="adveture_card d-flex flex-row gap-3">
                        <div className='col-4'>
                            <img src="service.webp" alt="Adventure" className="adventure_img3" />
                        </div>
                        <div className='col-8'>
                            <h5 className="adventure_title">24/7 Support</h5>
                            <p className="adventure_text">We are Here to help you anytime</p>
                        </div>
                    </div>
                </div>


                <div id='Popular_destinations'>
                    <div className="popular_destinations">
                        <div className="explore_more text-center mt-5 mb-5">
                            <h2 className="explore_title">Popular Destinations</h2>
                            <p className="sub-title w-25 mx-auto">
                                Top Places to Visit
                            </p>
                        </div>
                        <div className="popular_destinations d-flex flex-row justify-content-center gap-4 mb-5 p-5">
                            <div className="destination_card1 d-flex flex-column justify-content-end">
                                <h5 className="destination_card_title text-white">Agra, India</h5>
                                <p className="destination_card_subtitle text-white">Starting from<span className='fw-bold text-white fs-5'>$300</span></p>
                            </div>


                            <div className="destination_card2 d-flex flex-column justify-content-end">
                                <h5 className="destination_card_title text-white">Bali, Indonesia</h5>
                                <p className="destination_card_subtitle text-white">Starting from<span className='fw-bold text-white fs-5'>$300</span></p>
                            </div>


                            <div className="destination_card3 d-flex flex-column justify-content-end">
                                <h5 className="destination_card_title text-white">Paris, France</h5>
                                <p className="destination_card_subtitle text-white">Starting from<span className='fw-bold text-white fs-5'>$300</span></p>
                            </div>

                            <div className="destination_card4 d-flex flex-column justify-content-end">
                                <h5 className="destination_card_title text-white">Santorini, Greece</h5>
                                <p className="destination_card_subtitle text-white">Starting from<span className='fw-bold text-white fs-5'>$300</span></p>
                            </div>

                            <div className="destination_card5 d-flex flex-column justify-content-end">
                                <h5 className="destination_card_title text-white">Kyoto, Japan</h5>
                                <p className="destination_card_subtitle text-white">Starting from<span className='fw-bold text-white fs-5'>$300</span></p>
                            </div>
                        </div>

                        <button className="butnn mb-5">View All Destinations &nbsp;<i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>


                <div id='Why_travel_Us'>
                    <div className='why_Travel_Us'>
                        <div className="section-title w-75 mx-auto">
                            <span>Why Travel With Us?</span>
                        </div>
                        {/* <div className='text-center'>
                        <hr className='w-75 mx-auto' /><h2 className="why_title mt-5 mb-3">Why Travel With Us?</h2>
                    </div> */}

                        <div className='Travel_us_card d-flex flex-row justify-content-center gap-4 mb-5 mt-5'>
                            <div className='trav_card d-flex flex-column justify-content-center align-items-center text-center p-3'>
                                <img src="tour-guide.png" alt="Expertise" className='trav_img' />
                                <h5 className='trav_title mt-3'>Experienced Guides</h5>
                                <p className='trav_text'>Expert local guides for every trip.</p>
                            </div>


                            <div className='trav_card d-flex flex-column justify-content-center align-items-center text-center p-3'>
                                <img src="suite.jpg" alt="Expertise" className='trav_img' />
                                <h5 className='trav_title mt-3'>Custom Packages</h5>
                                <p className='trav_text'>Tailor-made itirieraries for you.</p>
                            </div>

                            <div className='trav_card d-flex flex-column justify-content-center align-items-center text-center p-3'>
                                <img src="secure.png" alt="Expertise" className='trav_img' />
                                <h5 className='trav_title mt-3'>Safe & Secure</h5>
                                <p className='trav_text'>Travel with Confidence.</p>
                            </div>

                        </div>
                    </div>
                </div>


                {/* <div id='footer'>
                    <div>
                        <img src="footer_img.png" alt="Footer Background" className="footer_bg_img" />
                    </div>

                    <div className='footer d-flex flex-row justify-content-center align-items-center gap-5'>
                        <div className='footer_card'>
                            <img src="footer_logo.png" alt="Logo" className="footer_logo" />
                            <p className='footer_text mt-3'>Discover the world with us.</p>
                            <p className='footer_text'>Best Destinations, Best Prices,Unforgettable memories.</p>
                        </div>


                        <div className='footer_card'>
                            <h5 className='footer_heading mb-3'>Quick Links</h5>
                            <div className='d-flex flex-column'>
                                <a href='#Home' className='footer_link mb-3 text-decoration-none'>Home</a>
                                <a href='#Destinations' className='footer_link mb-3 text-decoration-none'>Destinations</a>
                                <a href='#Why_travel_Us' className='footer_link mb-3 text-decoration-none'>Why Travel With Us?</a>
                            </div>
                        </div>

                        <div className='footer_card'>
                            <h5 className='footer_heading mb-3'>Popular Destinations</h5>
                            <div className='d-flex flex-column'>
                                <a href='#' className='footer_link mb-3 text-decoration-none'>Bali, Indonesia</a>
                                <a href='#' className='footer_link mb-3 text-decoration-none'>Paris, France</a>
                                <a href='#' className='footer_link mb-3 text-decoration-none'>Santorini, Greece</a>
                                <a href='#' className='footer_link mb-3 text-decoration-none'>Kyoto, Japan</a>
                            </div>
                        </div>


                        <div className='footer_card'>
                            <h5 className='footer_heading mb-3'>Contact Us</h5>
                            <div className='d-flex flex-column'>
                                <p className='footer_text mb-3'><i class="bi bi-envelope-fill"></i> &nbsp; Support@trav.com</p>
                                <p className='footer_text mb-3'><i class="bi bi-telephone-fill"></i> &nbsp; +1 234 567 890</p>
                            </div>
                        </div>


                    </div>
                    <div className='footer_bottom_bg'>
                        <div className='text-center footer_bottom_text pb-1 pt-3'>
                            <p>&copy; 2024 Trav. All rights reserved.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
}

export default Homepage;