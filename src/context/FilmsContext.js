import React, {createContext, useState} from 'react';

export const FilmsContext = createContext();

export default function FilmsContextProvider({children}) {
  const [films, setFilms] = useState([]);
  const [detailsTitle, setDetailsTitle] = useState('');

  const state = {
    detailsTitle,
    setDetailsTitle,
    films,
    setFilms,
  };

  return (
    <FilmsContext.Provider value={state}>{children}</FilmsContext.Provider>
  );
}
