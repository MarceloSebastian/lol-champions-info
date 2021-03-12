import { ChampionsInfoWrapper, Cards, Card } from '../StyledComponents';
import useSelect from '../hooks/useSelect';
import { useEffect, useState } from 'react';
import axios from 'axios';
import aatrox from '../static/images/aatrox.jpg'

const ChampionsPage = () => {

  const OPTIONS = [
    { value: 'all', category: 'All'},
    { value: 'assassin', category: 'Assassins'},
    { value: 'fighter', category: 'Fighters'},
    { value: 'mage', category: 'Mages'},
    { value: 'marksman', category: 'Marksmen'},
    { value: 'support', category: 'Supports'},
    { value: 'tank', category: 'Tanks'},
  ];

  const [ typechamp, Select ] = useSelect('all', OPTIONS);
  const [ champs, setchamps ] = useState([]);

  useEffect(() => {
    console.log(typechamp);
    
    const hitAPI = async () => {
      const url = 'http://ddragon.leagueoflegends.com/cdn/10.16.1/data/es_MX/champion.json';
      const response = await axios.get(url);
      // console.log(response.data.data);
      setchamps(response.data.data);
    };

    hitAPI();

  }, [typechamp])

  // const render = () => champs.forEach( item => console.log(item));
  // render();

  return ( 
    <ChampionsInfoWrapper>
        <span>Choose your</span>
        <h2>Champion</h2>
        <Select />
        <Cards>
          <Card>
            <figure>
              <img src='http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg' alt="chmp"/>
            </figure>
            <div className="name">
              <h3>Atrox</h3>
            </div>
          </Card>
        </Cards>
    </ChampionsInfoWrapper>
   );
}
 
export default ChampionsPage;



