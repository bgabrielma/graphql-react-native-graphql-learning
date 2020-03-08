import React, {useContext} from 'react';

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

import Header from './Header';

function deleteLastElement(films) {
  const length = films.length;

  console.log(length);
}

const Films = () => {
  const {films, setFilms} = useContext(FilmsContext);

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        {films.map((u, i) => {
          return (
            <View key={i}>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri: u.avatar}}
                />
                <View style={styles.boxInformation}>
                  <Text style={styles.filmTitle}>A New Hope</Text>
                  <Text style={styles.filmDirector}>George Lucas</Text>
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
                    title="Ep. 4"
                    titleStyle={styles.filmButtonText}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <Button
        icon={
          <FontAwesome5
            name="jedi"
            size={15}
            style={styles.filmButton}
            color="white"
          />
        }
        onPress={() => {
          const newFilms = [...films];

          // remove last element
          newFilms.shift();

          setFilms(newFilms);
        }}
        buttonStyle={[styles.filmButton, {margin: 40}]}
        title="Delete locally last element"
        titleStyle={styles.filmButtonText}
      />
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
