import React, {useContext} from 'react';
import {StyleSheet, View, Image} from 'react-native';
// Context
import {FilmsContext} from '../context/FilmsContext';

const SplashScreen = props => {
  const {urlImageFilms} = useContext(FilmsContext);
  setInterval(() => props.navigation.navigate('films'), 4222);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: urlImageFilms}}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
