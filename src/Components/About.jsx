import { useNavigate } from 'react-router-dom';
import './About.css';
function About() {
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
                    <h1 className="h1 fw-bold">Our Story</h1>
                    <p className="h5">Your Gateway to Unforgettable Adventures</p>
                </div>
            </div>
        </div>

        <div id='our_story'>
            <div className='container_fluid p-5'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <img src='/dummy_ourstory.png' className='ourstory_img img-fluid mb-5' />
                    </div>

                    <div className='col-12 col-lg-6'>
                        <p className='h4 mb-3 fw-bold'>Our Story</p>
                        <p className='h5 mb-3'>Your Gateway to <span className='fw-bold'>Unforgettable Adventures</span></p>
                        <p className='mb-5 lh-lg'>Welcome to iTrav your mission to provide a better endracienel travel experiences, vextre-spree-porsigitzed reqion-expets. in ourrosmeobbe. Me servise teedarecs to customize treastor experiences mat fol unique travel destination to your grid.</p>
                        <p><i class="bi bi-chevron-double-right"></i> Customized Travel Experiences Tailored Just for You</p>
                        <p><i class="bi bi-chevron-double-right"></i> Explore the World’s Most Beautiful Destinations with Ease</p>
                    </div>
                </div>
            </div>
        </div>

        <div id='numbers_speak'>
            <div className='container-fluid p-5 bg-light'>
                <p className='h1 fw-bold text-center mb-5'>Numbers Speak for Themselves</p>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='numbers_card'>
                            <img src='smile.gif' className='crad_img' />
                            <p className='h2 fw-bold'>5000+</p>
                            <p>Happy Travlers</p>
                        </div>
                    </div>



                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='numbers_card'>
                            <img src='airplane-take-off.gif' className='crad_img' />
                            <p className='h2 fw-bold'>100+</p>
                            <p>Breathtaking Destinations</p>
                        </div>
                    </div>


                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='numbers_card'>
                            <img src='location-icon.gif' className='crad_img' />
                            <p className='h2 fw-bold'>1500+</p>
                            <p>Customized Tours</p>
                        </div>
                    </div>



                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='numbers_card'>
                            <p className='h1 fw-bold'>24/7</p>
                            <img src='giphy.gif' className='rate mb-3' />
                            <p>Customer Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id='out_team'>
            <div className='container-fluid p-5'>
                <h2 className="section-title w-75 mx-auto">
                    Meet <span>Our Team</span>
                </h2>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='team_card'>
                            <img src='/Team_CEO.png' className='team_img img-fluid' />
                            <div className='py-4 px-4'>
                                <p className='h4 fw-bold'>Sarha Wiiliams</p>
                                <p className='h5 fw-bold text-primary'>CEO</p>
                                <p className=''>Great guiding leadership!</p>
                            </div>
                        </div>
                    </div>


                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='team_card'>
                            <img src='/Trav_Specilist.png' className='team_img img-fluid' />
                            <div className='py-4 px-4'>
                                <p className='h4 fw-bold'>David Johnson</p>
                                <p className='h5 fw-bold text-primary'>Travel Specialist</p>
                                <p className=''>Great Customer at Trav</p>
                            </div>
                        </div>
                    </div>


                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='team_card'>
                            <img src='/Team_support.png' className='team_img img-fluid' />
                            <div className='py-4 px-4'>
                                <p className='h4 fw-bold'>Emily Brown</p>
                                <p className='h5 fw-bold text-primary'>Customer Support</p>
                                <p className=''>24/7 Telemons</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id='Client_Says'>
            <h2 class="section-title w-75 mx-auto">
                What Our <span>Client Says</span>
            </h2>

            {/* <div class="divider w-75 mx-auto">
                <span className='our_team_meet fw-bold'>What Our<span className='our_team'>Client Says</span></span>
            </div> */}
            <div className='container-fluid p-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='client_outer_card'>
                            <img src='rating.png' className='img-fluid rating' />
                            <div className='client_inner_card '>
                                <div className='d-flex flex-row justify-content-center'>
                                    <img src='client_1.png' className='profile-img' />
                                </div>
                                <p className='h3 fw-bold'><i class="bi bi-quote fw-bold fs-1 text-primary"></i>Jessica Tuner</p>
                                <p className='h5 text-center'><i class="bi bi-geo-alt-fill text-danger"></i> New York, USA</p>
                                <div className='line'></div>
                                <p className='fs-6'>Exceptional experience!
                                    Seamless and well-organized.
                                    Highly recommend!</p>
                            </div>
                        </div>
                    </div>




                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='client_outer_card'>
                            <img src='rating.png' className='img-fluid rating' />
                            <div className='client_inner_card '>
                                <div className='d-flex flex-row justify-content-center'>
                                    <img src='Trav_Specilist.png' className='profile-img' />
                                </div>
                                <p className='h3 fw-bold'><i class="bi bi-quote fw-bold fs-1 text-primary"></i>Mark Anderson</p>
                                <p className='h5 text-center'><i class="bi bi-geo-alt-fill text-danger"></i> Los Angeles, USA</p>
                                <div className='line'></div>
                                <p className='fs-6'>A Trip of lifetime!
                                    Everything is perfectly planed and unforgottable!</p>
                            </div>
                        </div>
                    </div>



                    <div className='col-12 col-md-6 col-lg-4'>
                        <div className='client_outer_card'>
                            <img src='rating.png' className='img-fluid rating' />
                            <div className='client_inner_card '>
                                <div className='d-flex flex-row justify-content-center'>
                                    <img src='Team_support.png' className='profile-img' />
                                </div>
                                <p className='h3 fw-bold'><i class="bi bi-quote fw-bold fs-1 text-primary"></i>Emily Davis</p>
                                <p className='h5 text-center'><i class="bi bi-geo-alt-fill text-danger"></i> Chicago, USA</p>
                                <div className='line'></div>
                                <p className='fs-6'>Fantastic service and besutiful destinations.Will definitely book again!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default About;