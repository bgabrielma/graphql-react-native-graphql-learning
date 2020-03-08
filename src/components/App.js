/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext} from 'react';

// Components
import Films from './Films';
import Header from './Header';
import Details from './Details';

import {createStackNavigator} from '@react-navigation/stack';

// Context
import {FilmsContext} from '../context/FilmsContext';

const Stack = createStackNavigator();

const components = () => {
  const {detailsTitle} = useContext(FilmsContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="films"
        component={Films}
        options={{
          header: Header,
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: detailsTitle,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#35A7FF'},
        }}
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default components;
