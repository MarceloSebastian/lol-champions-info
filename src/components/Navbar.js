import { LogoImage } from '../StyledComponents';
import logoImage from '../static/images/logo.jpg'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav>
      <LogoImage>
        <Link to='/home'>
          <img src={logoImage} alt="LogoImage"/>
        </Link>
      </LogoImage>
      <div className="links">
        <NavLink activeClassName='active' to="/home">Home</NavLink>
        <NavLink activeClassName='active' to="/champions">Champions</NavLink>
        <NavLink activeClassName='active' to="/about">About</NavLink>
      </div>
    </nav>
   );
}
 
export default Navbar;