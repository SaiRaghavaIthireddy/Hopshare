import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {colors} from '../src/Common/ColorPalette';
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding'); 
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo-removebg-preview.png')} style={styles.logo} resizeMode='cover'/>
      {/* <Text style={styles.tagline}>Your Ride, Your Way</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  logo: {
    // width: 150,
    // height: 150,
  },
  tagline: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default SplashScreen;
