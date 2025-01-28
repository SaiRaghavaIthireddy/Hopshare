import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function UploadDocumentScreen({ navigation }) {
  const [loading, setLoading] = useState(false); // State to manage loader visibility

  const handleDocumentUpload = (documentType) => {
    console.log(`${documentType} uploaded`);
    // Here you would add the logic to open the camera or file picker
  };

  const handleContinue = () => {
    // Show the loader when the user clicks continue
    setLoading(true);

    // Simulate a delay for the upload process (you can replace it with actual API call or file upload)
    setTimeout(() => {
      setLoading(false); // Hide the loader once the process is done
      navigation.navigate('NextScreen'); // Navigate to the next screen
    }, 2000); // 2 seconds delay
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* <Text style={styles.backButton}>{"<"}</Text> */}
      </TouchableOpacity>

      <Text style={styles.header}>Upload your document</Text>

      {/* Driving License Upload */}
      <View style={styles.uploadBox}>
        <Text style={styles.uploadTitle}>Driving license</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleDocumentUpload('Driving License')}>
          <Image 
            source={{ uri: 'https://img.icons8.com/ios/452/camera.png' }} 
            style={styles.uploadIcon} 
          />
          <Text style={styles.uploadText}>Upload your car driving license</Text>
        </TouchableOpacity>
      </View>

      {/* Government ID Upload */}
      <View style={styles.uploadBox}>
        <Text style={styles.uploadTitle}>Government id</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleDocumentUpload('Government ID')}>
          <Image 
            source={{ uri: 'https://img.icons8.com/ios/452/camera.png' }} 
            style={styles.uploadIcon} 
          />
          <Text style={styles.uploadText}>
            Upload any one government proof i.e. Aadhaar card or Voter id
          </Text>
        </TouchableOpacity>
      </View>

      {/* Show Loader if loading state is true */}
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#D84B4B" />
          <Text style={styles.loaderText}>Please wait</Text>
        </View>
      ) : (
        // Continue Button
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    fontSize: 30,
    position: 'absolute',
    top: 20,
    left: 10,
    color: '#D84B4B',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  uploadBox: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  uploadIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  uploadText: {
    fontSize: 16,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#D84B4B',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loaderText: {
    fontSize: 16,
    color: '#D84B4B',
    marginTop: 10,
  },
});
