import React, {useContext} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const SplashScreen = props => {
  setTimeout(() => props.navigation.replace('films'), 4220);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://data.whicdn.com/images/306659244/original.jpg'}}
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
