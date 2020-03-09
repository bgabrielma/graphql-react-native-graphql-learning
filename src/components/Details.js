/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useContext} from 'react';

import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

// Context
import {FilmsContext} from '../context/FilmsContext';

// useQuery apollo hook
import {useQuery} from '@apollo/react-hooks';

// Queries
import {GET_FILM_DETAILS_BY_ID} from '../graphql/Queries';

// moment

import moment from 'moment';

const components = props => {
  const {setDetailsTitle, urlImageFilms} = useContext(FilmsContext);
  const {filmsDetails, setFilmsDetails} = useContext(FilmsContext);

  function toTimeZone(time, zone) {
    var format = 'YYYY/MM/DD HH:mm:ss ZZ';
    return moment(time, format)
      .tz(zone)
      .format(format);
  }

  // Change Title bar
  const id = props.route.params.id;

  // Update global state
  setDetailsTitle('Loading title...');

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
  setFilmsDetails(data);

  if (filmsDetails) {
    // Update global state
    setDetailsTitle(filmsDetails.Film?.title);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card
          title={moment(filmsDetails.Film?.releaseDate).format('YYYY/MM/DD')}
          featuredTitle={`Episode ${filmsDetails.Film?.episodeId}`}
          featuredSubtitle={filmsDetails.Film?.director}
          image={{uri: urlImageFilms}}>
          <Text style={styles.openingCrawl}>
            {filmsDetails.Film?.openingCrawl}
          </Text>
        </Card>
        <Card title="Planets">
          <View>
            {filmsDetails.Film?.planets?.map((planet, index) => (
              <ListItem
                key={index}
                title={planet.name}
                subtitle={`Population: ${planet.population || '0'}`}
                topDivider
              />
            ))}
          </View>
        </Card>
        <Card title="Characters">
          <View>
            {filmsDetails.Film?.characters?.map((planet, index) => (
              <ListItem
                key={index}
                title={planet.name}
                subtitle={planet.homeworld?.name || 'No homeworld available'}
                topDivider
              />
            ))}
          </View>
        </Card>
        <Card title="Starships">
          <View>
            {filmsDetails.Film?.starships?.map((planet, index) => (
              <ListItem
                key={index}
                title={planet.name}
                subtitle={`Cargo Capacity: ${planet.cargoCapacity}`}
                topDivider
              />
            ))}
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  openingCrawl: {
    alignSelf: 'center',
    margin: 15,
    textAlign: 'justify',
  },
  containerLoadingOrError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
  },
  textLoadingOrError: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default components;
