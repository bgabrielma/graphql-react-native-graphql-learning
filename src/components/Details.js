/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useContext} from 'react';

import {View, StyleSheet, Text} from 'react-native';

// Context
import {FilmsContext} from '../context/FilmsContext';

// useQuery apollo hook
import {useQuery} from '@apollo/react-hooks';

// Queries
import {GET_FILM_DETAILS_BY_ID} from '../graphql/Queries';

const components = props => {
  const {setDetailsTitle} = useContext(FilmsContext);

  // Change Title bar
  const id = props.route.params.id;

  // Update global state
  setDetailsTitle(props.route.params.id);

  const {loading, error, data} = useQuery(GET_FILM_DETAILS_BY_ID, {
    variables: {id},
  });

  if (loading) {
    return (
      <View style={styles.containerLoadingOrError}>
        <Text style={styles.textLoadingOrError}>Loading data...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.containerLoadingOrError}>
        <Text style={styles.textLoadingOrError}>
          Error on loading: {error.message}
        </Text>
      </View>
    );
  }

  // data if available
  console.log(data);

  return <View />;
};

const styles = StyleSheet.create({
  containerLoadingOrError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoadingOrError: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default components;
