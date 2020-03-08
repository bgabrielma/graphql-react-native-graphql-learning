import React, {useContext} from 'react';
// Context
import FilmsContextProvider from '../context/FilmsContext';

import Films from './Films';

const components = () => {
  return (
    <FilmsContextProvider>
      <Films />
    </FilmsContextProvider>
  );
};

export default components;
