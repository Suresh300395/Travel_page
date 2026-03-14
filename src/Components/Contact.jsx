import './Contact.css'
function Contact() {
    return <div>
        <div className="bg_container">
            <div className="contact-content text-center">
                <p className="h1 fw-bold">Contact US</p>
                <p className="h4">Get in Touch with us any questions or enquiries.</p>
            </div>
        </div>
        <div className="section-title w-75 mx-auto mt-5 mb-5">
            <p className=''>Get in <span className=''>Touch</span></p>
        </div>


        <section>
            <div className='container-fluid bg_contact'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='address_card shadow rounded'>
                            <div className='d-flex flex-row'>
                                <div style={{ backgroundColor: "aliceblue", padding: "10px", marginRight: "10px", borderRadius: "8px" }}>
                                    <img src='contact_icon.png' style={{ height: "40px", width: "40px" }} />
                                </div>
                                <p className='h2 fw-bold mt-2'>Contact</p>
                            </div>
                            <div className='d-flex flex-row align-items-center'>
                                <div className='con_bg mt-3'>
                                    <i class="bi bi-telephone-fill fs-3 text-primary"></i>
                                </div>
                                <p className='fs-6 fw-bold mt-4'>+91 9143143143</p>
                            </div>
                            <div className='d-flex flex-row align-items-center'>
                                <div className='con_bg mt-3'>
                                    <i class="bi bi-envelope-fill fs-3 text-info"></i>
                                </div>
                                <p className='fs-6 fw-bold mt-4'>Support@trav.com</p>
                            </div>
                            <div className='d-flex flex-row align-items-center'>
                                <div className='con_bg mt-3'>
                                    <i class="bi bi-geo-alt-fill fs-3 text-danger"></i>
                                </div>
                                <p className='fs-6 fw-bold mt-4'>123 Adventure City,Travlers Lane, TX 12345</p>
                            </div>
                        </div>
                    </div>



                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='form_card shadow rounded'>
                            <p className='h3 fw-bold'>Send Us a Message</p>
                            <form className="p-4">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn px-4"
                                    style={{
                                        backgroundColor: "#f5a623",
                                        color: "#fff",
                                        fontWeight: "500"
                                    }}
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </div>
                </div>


                <div style={{ width: "100%", height: "400px", margin:"100px 0px",display:"flex",flex:"row",justifyContent:"center" }}>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d397.9544489691781!2d82.17507757298965!3d17.052943525495728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1769666694633!5m2!1sen!2sin"
                        width="80%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>

        <p className='h2 fw-bold m-4 text-center'>Let's Make Your Travel Dreams a Reality!</p>
        <p className='h5  m-4 text-center'>Contact us today and we'll help you plan the adventure or realtime!</p>
        <button className='get_started'>Get Started</button>

    </div>
}
export default Contact;