import React from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const components = () => (
  <SafeAreaView barStyle="dark-content">
    <View style={styles.container}>
      <Text>Welcome to react-native, My Fellow User!</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default components;
