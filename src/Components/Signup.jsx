function Signup(){
    return <div>
        {/* <div className='bg_container'> */}
        <div className="video-container">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src="/bg_video_signup.mp4" type="video/mp4" />
                    </video>
            <div className='card_container'>
                <img src="logo.png" alt="user_icon" className='user_icon' />
                <p className='login_heading fw-bold h2 text-white'>Sign Up</p>
                <label className='label_text mb-2'>Full Name</label><br />
                <div className="input-group mb-2">
                    <span className="input-group-text"> 
                        <i class="bi bi-person-fill text-primary"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                </div>


                <label className='label_text mb-2'>Email Address</label><br />
                <div className="input-group mb-2">
                    <span className="input-group-text"> 
                        <i class="bi bi-envelope-fill text-primary"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                </div>
                <label className='label_text mb-2'>Password</label><br />
                <div className="input-group mb-2">
                    <span className="input-group-text">
                        <i class="bi bi-lock-fill text-success"></i>
                    </span>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>


                <label className='label_text mb-2'>Confirm Password</label><br />
                <div className="input-group mb-2">
                    <span className="input-group-text">
                        <i class="bi bi-lock-fill text-success"></i>
                    </span>
                    <input type="password" className="form-control" placeholder="Enter Confirm Password" />
                </div>


                <button className='login_button'>Sign Up</button>
            </div>
        </div>
    </div>;
}

export default Signup;