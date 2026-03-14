import './Forgetpwd.css';
function Forgetpwd() {
    return <div>
            {/* <div className="bg_container"> */}
            <div className="video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/bg_video_forgetpwd.mp4" type="video/mp4" />
                    </video>
                <div className='card_container'>
                    <img src="logo.png" alt="user_icon" className='user_icon' />
                    <p className='login_heading text-white h2 fw-bold mt-5 mb-5'>Forget Password</p>
                    <label className='label_text mb-2'>Email Address</label><br />
                    <div className="input-group mb-2">
                        <span className="input-group-text">
                            <i class="bi bi-envelope-fill text-primary"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Enter Email Address" />
                    </div>
                    <button className='login_button'>Send Reset Link</button>
                </div>
        </div>
        </div>;
}

        export default Forgetpwd;