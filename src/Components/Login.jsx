import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
    const navigate = useNavigate();
    const signupClicked = () => {
        console.log("signupclicked");
        navigate("/signup")
    }
    const forgotpwdClicked =() => {
        navigate ('/forgetpwd')
    }
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
                <source src="/bg_video_login.mp4" type="video/mp4" />
            </video>
            <div className='card_container'>
                <img src="logo.png" alt="user_icon" className='user_icon' />
                <p className='login_heading text-white h2 fw-bold'>Login</p>
                {/* <div>
                    <label className='label_text'>Username</label><br />
                    <i class="bi bi-envelope-fill"></i>
                    <input type="text" className='input_box' placeholder='Email Address' /><br />
                </div>
                <div>
                    <label className='label_text'>Password</label><br />
                    <input type="password" className='input_box' placeholder='Password' /><br />
                </div> */}
                <label className='label_text mb-2'>Username</label><br />
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
                <div>
                    <input type="checkbox" className='checkbox' />
                    <label className='remember_text text-white'> &nbsp;&nbsp;Remember Me</label>
                    <a href='#' className='forgot_text float-end text-decoration-none' onClick={forgotpwdClicked}>Forgot Password?</a>
                </div>
                <button className='login_button'>Login</button>

                <p className='signup_text'>Don't have an account? <a href='#' className='signup_link' onClick={signupClicked}>Sign Up</a></p>
            </div>
        </div>
    </div>;
}

export default Login;