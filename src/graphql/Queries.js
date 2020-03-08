import gql from 'graphql-tag';

const GET_FILMS = gql`
  query {
    allFilms {
      title
      episodeId
      director
    }
  }
`;

export {GET_FILMS};
