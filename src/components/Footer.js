import banner1 from '../static/images/banner.png';
import banner2 from '../static/images/banner2.png';
import { FooterWrapper } from '../StyledComponents';

const Footer = () => {
  return ( 
    <FooterWrapper>
      <figure className='banner1'>
        <img src={banner1} alt="banner"/>
      </figure>
      <figure className='banner2'>
        <img src={banner2} alt="banner2"/>
      </figure>
      <div className="container">

        {/* <div className="left">
          <span>Created By</span>
          <p>Marcelo Sebastian</p>
        </div>
        <div className="right">
          <a href="#">
            <i class="fas fa-envelope-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-github-square"></i>
          </a>
        </div> */}

      </div>
    </FooterWrapper>
   );
}
 
export default Footer;