import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

// Sample data for Profile options
const profileOptions = [
  { id: '1', title: 'Edit profile', icon: '👤' },
  { id: '2', title: 'My car', icon: '🚗' },
  { id: '3', title: 'Ride history', icon: '🕒' },
  { id: '4', title: 'Language', icon: '🌐' },
  { id: '5', title: 'Terms & condition', icon: '📃' },
  { id: '6', title: 'Privacy policy', icon: '🔒' },
  { id: '7', title: 'Help & support', icon: '❓' },
];

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Add logic for logging out the user
    console.log('User logged out');
    // Navigate to login screen or clear session
    navigation.navigate('Login');  // Change to actual login screen navigation
  };

  const renderProfileOption = ({ item }) => (
    <TouchableOpacity style={styles.optionContainer}>
      <Text style={styles.optionText}>{item.icon} {item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }} // Replace with actual user image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Courtney Henry</Text>
        <Text style={styles.profilePhone}>+91 123456789</Text>
      </View>

      <View style={styles.walletContainer}>
        <Text style={styles.walletTitle}>Wallet</Text>
        <Text style={styles.walletAmount}>$110.00</Text>
      </View>

      <FlatList
        data={profileOptions}
        renderItem={renderProfileOption}
        keyExtractor={(item) => item.id}
        style={styles.optionsList}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profilePhone: {
    fontSize: 16,
    color: '#666',
  },
  walletContainer: {
    marginBottom: 30,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  walletTitle: {
    fontSize: 16,
    color: '#888',
  },
  walletAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D84B4B',
    marginTop: 5,
  },
  optionsList: {
    flex: 1,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#D84B4B',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
