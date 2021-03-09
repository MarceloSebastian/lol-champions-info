import { AboutWrapper } from "../StyledComponents";
import champion from '../static/champions/yasuo.png';
import Footer from "./Footer";


const AboutPage = () => {
  return ( 
    <>
      <AboutWrapper>
        <figure>
          <img src={ champion } alt="champion"/>
        </figure>
        <div className="content">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis dolorum voluptatem optio ab quos exercitationem dignissimos sapiente molestias molestiae error sequi aut id eius, distinctio atque accusantium. Dicta, sapiente!
          Quas saepe, quia quaerat sed ipsum, nulla minima ea neque rem illo pariatur! Iste minima ducimus debitis, animi ipsa maxime ex temporibus ut, esse consequatur deleniti aliquid.</p>
          <a href="#!">
            Contact Us
          </a>
        </div>
      </AboutWrapper>
      <Footer />
    </>
   );
}
 
export default AboutPage;