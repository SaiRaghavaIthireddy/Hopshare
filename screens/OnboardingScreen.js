import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Step 1 */}
      <View style={styles.slide}>
        {/* <Image source={require('./assets/welcome-image.png')} style={styles.image} /> */}
        <Text style={styles.heading}>Welcome to RideShare</Text>
        <Text style={styles.description}>
          Book your rides with ease and get to your destination in no time!
        </Text>
      </View>

      {/* Step 2 */}
      <View style={styles.slide}>
        {/* <Image source={require('./assets/location-icon.png')} style={styles.icon} /> */}
        <Text style={styles.heading}>Step 1: Enter your locations</Text>
        <Text style={styles.description}>Pick-up and drop-off addresses.</Text>
      </View>

      {/* Step 3 */}
      <View style={styles.slide}>
        {/* <Image source={require('./assets/ride-type-icon.png')} style={styles.icon} /> */}
        <Text style={styles.heading}>Step 2: Select your ride type</Text>
        <Text style={styles.description}>Choose Standard or Premium options.</Text>
      </View>

      {/* Get Started Button */}
      <View style={styles.buttonContainer}>
        <Button title="Get Started" onPress={() => navigation.navigate('Home')} />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  slide: {
    marginBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 30,
    width: '80%',
  },
});
