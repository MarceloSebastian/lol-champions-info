import { Redirect } from 'react-router-dom';

const RedirectPage = () => {
  return ( 
    <Redirect
      to={{
        pathname: "/home"
      }}
    />
   );
}
 
export default RedirectPage;