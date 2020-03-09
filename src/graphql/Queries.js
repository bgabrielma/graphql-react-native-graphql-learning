import gql from 'graphql-tag';

const GET_FILMS = gql`
  query {
    allFilms(orderBy: episodeId_DESC) {
      id
      title
      episodeId
      director
    }
  }
`;

const GET_FILM_DETAILS_BY_ID = gql`
  query FilmById($id: ID) {
    Film(id: $id) {
      id
      title
      episodeId
      openingCrawl
      director
      releaseDate
      planets {
        name
        population
      }
      characters {
        name
        homeworld {
          name
        }
      }
      starships {
        name
        cargoCapacity
      }
    }
  }
`;

export {GET_FILMS, GET_FILM_DETAILS_BY_ID};
