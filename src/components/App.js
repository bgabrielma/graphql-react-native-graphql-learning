import React from 'react';

// Context
import FilmsContextProvider from '../context/FilmsContext';

// Components
import Films from './Films';

const components = () => {
  return (
    <FilmsContextProvider>
      <Films />
    </FilmsContextProvider>
  );
};

export default components;
