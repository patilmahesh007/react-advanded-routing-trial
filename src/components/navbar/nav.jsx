import './nav.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <header>
      <div className="container">
        <Link className='nav-names' to="/">Home</Link>
        <Link className='nav-names' to="/about">About Us</Link>
        <Link className='nav-names' to="/contact">Contact Us</Link>
      </div>
    </header>
  );
}

export default Footer;
