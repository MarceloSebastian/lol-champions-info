import { useParams } from 'react-router-dom';

const ChampionInfoPage = () => {

  const { id } = useParams();

  return ( 
    <h1>Hero number: {id}</h1>
   );
}
 
export default ChampionInfoPage;