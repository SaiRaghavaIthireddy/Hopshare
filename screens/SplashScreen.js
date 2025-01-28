import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding'); // Navigate to Onboarding screen after 3 seconds
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/rideShareLogo.jpg')} style={styles.logo} />
      <Text style={styles.tagline}>Your Ride, Your Way</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
