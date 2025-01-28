import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Button } from 'react-native';

export default function VerificationScreen({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']); // Store OTP digits
  const [timer, setTimer] = useState(60); // Timer for OTP expiration

  useEffect(() => {
    // Countdown timer
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [timer]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    // Logic to verify OTP
    const otpCode = otp.join('');
    console.log('OTP entered:', otpCode);
    // Navigate to next screen on successful verification
    navigation.navigate('Home');
  };

  const handleFocusNextInput = (index) => {
    // Move focus to the next input automatically after each character is entered
    if (index < 3) {
      // Select next input field
      this[`otpInput${index + 1}`].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* <Text style={styles.backButton}>{"<"}</Text> */}
      </TouchableOpacity>

      <Text style={styles.header}>OTP Verification</Text>
      <Text style={styles.subheader}>
        Confirmation code has been sent to you on your mobile number +91 1234567890
      </Text>

      {/* OTP Input */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => {
              handleOtpChange(text, index);
              handleFocusNextInput(index); // Focus next input automatically
            }}
            ref={(input) => {
              this[`otpInput${index}`] = input;
            }}
          />
        ))}
      </View>

      {/* Timer */}
      <Text style={styles.timer}>{`00:${timer < 10 ? '0' : ''}${timer}`}</Text>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Numeric Keypad (optional, for mobile keyboard) */}
      {/* You can let the native mobile keyboard handle the OTP input, so the keypad isn't necessarily required in this case */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
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
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    borderColor: '#ddd',
  },
  timer: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D84B4B',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
