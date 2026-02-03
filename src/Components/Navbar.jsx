import { useNavigate, Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const loginClicked = () => {
        console.log("login Clicked");
        navigate("/login")
    }
    const homeClicked = () => {
        navigate("/")
    }
    const aboutClicked = () => {
        navigate("/about")
    }
    const serviceClicked = () =>{
        navigate("/services")
    }
    const portfolioClicked = () =>{
        navigate("/portfolio")
    }
    const contactClicked = () =>{
        navigate("/contact")
    }
    return <div>
        <nav className="navbar navbar-expand-lg shadow fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="logo.png" alt="Logo" className="logo-img" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-4">
                        <li className="nav-item">
                            <NavLink to='/' className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/services' className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/portfolio' className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <button className="nav_btnn mx-4" onClick={loginClicked}>Login</button>
            </div>
        </nav>
    </div>
}

export default Navbar;