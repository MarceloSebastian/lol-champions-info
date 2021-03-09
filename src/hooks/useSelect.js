import {StyledSelectBar} from '../StyledComponents';
import { useState } from 'react';

const useSelect = ( initialState, options ) => {

  const [ state, setState ] = useState(initialState);
  const handleChange = e => {
    // console.log(e.target.value);
    setState(e.target.value)
  }

  const Select = () => (
    <StyledSelectBar
      onChange={ handleChange }
      value={state}
    >
      { options.map( option => (
        <option key={option.value} 
          value={option.value}
        >{option.category}</option>
      )) }
    </StyledSelectBar>
  )

  return [ state, Select ];

}

export default useSelect;