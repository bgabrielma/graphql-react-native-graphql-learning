import React, {createContext, useState} from 'react';

export const FilmsContext = createContext();

export default function FilmsContextProvider({children}) {
  const [films, setFilms] = useState([]);
  const [filmsDetails, setFilmsDetails] = useState([]);
  const [detailsTitle, setDetailsTitle] = useState('Loading title...');

  // because online server doesn't provide an image for films
  const [urlImageFilms, setUrlImageFilms] = useState(
    'https://data.whicdn.com/images/306659244/original.jpg',
  );

  const state = {
    detailsTitle,
    setDetailsTitle,
    films,
    setFilms,
    urlImageFilms,
    setUrlImageFilms,
    filmsDetails,
    setFilmsDetails,
  };

  return (
    <FilmsContext.Provider value={state}>{children}</FilmsContext.Provider>
  );
}
