import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Header, Icon, Text} from 'react-native-elements';

// import { Container } from './styles';

const components = () => (
  <>
    <View style={styles.container}>
      <Icon color="#fff" name="film" type="font-awesome" />
      <Text style={[styles.textHeader, styles.textWhite]}>StarWars Movies</Text>
    </View>
    <View style={styles.lineDivider} />
  </>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#35A7FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 10,
  },
  textWhite: {
    color: '#fff',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  lineDivider: {
    height: 10,
    backgroundColor: '#6457A6',
    elevation: 10,
  },
});

export default components;
