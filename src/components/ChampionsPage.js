import { ChampionsInfoWrapper, Cards, Card } from '../StyledComponents';
import useSelect from '../hooks/useSelect';
import { useEffect } from 'react';
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

  // useEffect(() => {
  //   console.log(typechamp);

  // }, [typechamp])

  return ( 
    <ChampionsInfoWrapper>
        <span>Choose your</span>
        <h2>Champion</h2>
        <Select />
        <Cards>
          <Card>
            <figure>
              <img src={aatrox} alt="chmp"/>
            </figure>
            <div className="name">
              <h3>Atrox</h3>
            </div>
          </Card>
          <Card>
            <figure>
              <img src={aatrox} alt="chmp"/>
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



