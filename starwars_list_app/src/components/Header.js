import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Header, Button, Icon, Text} from 'react-native-elements';

// import { Container } from './styles';

const components = () => (
  <Header
    backgroundColor="#35A7FF"
    centerComponent={
      <View style={styles.container}>
        <Icon color="#fff" name="film" type="font-awesome" />
        <Text style={[styles.textHeader, styles.textWhite]}>
          StarWars Movies
        </Text>
      </View>
    }
  />
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textWhite: {
    color: '#fff',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default components;
