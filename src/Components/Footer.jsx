import './Footer.css';

function Footer() {
    return <div>
        <div id='footer'>
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
                        <a href='#Home' className='text-white mb-3 text-decoration-none'>Home</a>
                        <a href='#Destinations' className='text-white mb-3 text-decoration-none'>Destinations</a>
                        <a href='#Why_travel_Us' className='text-white mb-3 text-decoration-none'>Why Travel With Us?</a>
                    </div>
                </div>

                <div className='footer_card'>
                    <h5 className='footer_heading mb-3'>Popular Destinations</h5>
                    <div className='d-flex flex-column'>
                        <a href='#' className='text-white mb-3 text-decoration-none'>Bali, Indonesia</a>
                        <a href='#' className='text-white mb-3 text-decoration-none'>Paris, France</a>
                        <a href='#' className='text-white mb-3 text-decoration-none'>Santorini, Greece</a>
                        <a href='#' className='text-white mb-3 text-decoration-none'>Kyoto, Japan</a>
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
        </div>
    </div>
}

export default Footer;