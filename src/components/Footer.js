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

        <span className='golden'>Created By</span>
        <p>Marcelo Sebastian</p>

        
        <div className="social">
          <a href="https://twitter.com/Sebastian__Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square golden"></i>
          </a>

          <a href="https://github.com/MarceloSebastian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square golden"></i>
          </a>

          <a href="mailto:na.marcelo.sebastian@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope-square golden"></i>
          </a>

        </div>

      </div>
    </FooterWrapper>
   );
}
 
export default Footer;