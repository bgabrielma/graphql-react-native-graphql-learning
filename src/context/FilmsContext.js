import React, {createContext, useState} from 'react';

export const FilmsContext = createContext();

export default function FilmsContextProvider({children}) {
  const [films, setFilms] = useState([]);

  const state = {
    films,
    setFilms,
  };

  return (
    <FilmsContext.Provider value={state}>{children}</FilmsContext.Provider>
  );
}
