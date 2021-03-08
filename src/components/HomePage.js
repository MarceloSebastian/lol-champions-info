import { Link } from 'react-router-dom';
import title from '../static/images/title.png';
import { WrapperHome, Hero } from '../StyledComponents';


const HomePage = () => {
  return ( 
    <WrapperHome className='imagebg'>
      <Hero>
        <figure>
          <img src={title} alt="title"/>
          <p>League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.</p>
        </figure>
        <Link to='/champions'>Champions List</Link>
      </Hero>
    </WrapperHome>
   );
}
 
export default HomePage;