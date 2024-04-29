import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../style/manikandan/style.css'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(false);
  };

  // change nav color when scrolling
const [color, setColor] = useState( false)
const changeColor = () => {
if (window.scrollY >= 2) {
setColor(true)
}
else {
setColor(false)
}}
window.addEventListener('scroll' ,changeColor)

  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
    
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/team">Team</Link>
      </div>
      <div className='logo-container'>
      <Link to="/">
        <span className="logo">SiteLogo</span>
      </Link>
      </div>

      <div className="nav-btn">
        <button className='login-btn'>Log In</button>
        <button className='register-btn'>Register</button>
        <FaBars className="bars" onClick={() => setShowNav(!showNav)} />
      </div>

      <div className={showNav ? 'nav-menu show-nav' : 'nav-menu'}>
        <Link to="/" className="nav-link" onClick={closeNav}>
           About
        </Link>
        <Link to="" className="nav-link" onClick={closeNav}>
           Features
        </Link>
        <Link to="/pricing" className="nav-link" onClick={closeNav}>
           Pricing
        </Link>
        <Link to="/gallery" className="nav-link" onClick={closeNav}>
           Gallery
        </Link>
        <Link to="/team" className="nav-link" onClick={closeNav}>
           Team
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
