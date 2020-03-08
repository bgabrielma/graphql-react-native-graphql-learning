import React, {Component, createContext, useState} from 'react';

export const FilmsContext = createContext();

const filmsArray = [
  {
    name: 'Bruno Martins',
    avatar: 'https://data.whicdn.com/images/306659244/original.jpg',
    subtitle: 'Vice Director',
  },
  {
    name: 'Bruno Martins',
    avatar: 'https://data.whicdn.com/images/306659244/original.jpg',
  },
  {
    name: 'Bruno Martins',
    avatar: 'https://data.whicdn.com/images/306659244/original.jpg',
  },
  {
    name: 'Bruno Martins',
    avatar: 'https://data.whicdn.com/images/306659244/original.jpg',
  },
];

export default function FilmsContextProvider({children}) {
  const [films, setFilms] = useState(filmsArray);

  const state = {
    films,
    setFilms,
  };

  return (
    <FilmsContext.Provider value={state}>{children}</FilmsContext.Provider>
  );
}
