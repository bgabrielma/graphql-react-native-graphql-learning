/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useContext} from 'react';

import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Context
import {FilmsContext} from '../context/FilmsContext';

const components = props => {
  const {setDetailsTitle} = useContext(FilmsContext);

  // Change Title bar
  setDetailsTitle(props.route.params.id);

  const navigation = useNavigation();

  return <View />;
};

export default components;
