import { ChampionsInfoWrapper } from '../StyledComponents';
import useSelect from '../hooks/useSelect';
import { useEffect } from 'react';

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
    </ChampionsInfoWrapper>
   );
}
 
export default ChampionsPage;



