import React, {useContext, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Button} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Context
import {FilmsContext} from '../context/FilmsContext';

// useQuery apollo hook
import {useQuery} from '@apollo/react-hooks';

// Queries
import {GET_FILMS} from '../graphql/Queries';

import Header from './Header';

const Films = () => {
  const {films, setFilms} = useContext(FilmsContext);

  const {loading, error, data} = useQuery(GET_FILMS);

  // because online server doesn't provide an image for films
  const [urlImageFilms, setUrlImageFilms] = useState(
    'https://data.whicdn.com/images/306659244/original.jpg',
  );

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

  // data is available
  setFilms(data.allFilms);

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        {films.map((film, index) => {
          return (
            <View key={index}>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri: urlImageFilms}}
                />
                <View style={styles.boxInformation}>
                  <Text style={styles.filmTitle}>{film.title}</Text>
                  <Text style={styles.filmDirector}>{film.director}</Text>
                </View>
                <View style={styles.boxInformation}>
                  <Button
                    icon={
                      <FontAwesome5
                        name="jedi"
                        size={15}
                        style={styles.filmButton}
                        color="white"
                      />
                    }
                    buttonStyle={styles.filmButton}
                    title={`${film.episodeId}`}
                    titleStyle={styles.filmButtonText}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
    justifyContent: 'center',
  },
  containerLoadingOrError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoadingOrError: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    margin: 15,
    width: Dimensions.get('window').width / 2 - 45,
    backgroundColor: '#f4f4f4',
    minHeight: 250,
    borderRadius: 18,
    elevation: 10,
  },
  boxInformation: {
    padding: 10,
  },
  image: {
    borderRadius: 5,
    flex: 3,
  },
  informationProp: {
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  filmTitle: {
    color: '#3E7CB1',
    fontWeight: 'bold',
  },
  filmDirector: {
    color: '#81A4CD',
  },
  filmButtonText: {
    marginLeft: 10,
  },
  filmButton: {
    backgroundColor: '#2541B2',
  },
});

export default Films;
