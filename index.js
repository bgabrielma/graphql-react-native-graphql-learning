import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

// Context
import FilmsContextProvider from './src/context/FilmsContext';

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';

//Client configuration
const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/',
});

const AppRoot = () => (
  <NavigationContainer>
    <ApolloProvider client={client}>
      <FilmsContextProvider>
        <App />
      </FilmsContextProvider>
    </ApolloProvider>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => AppRoot);
