import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';


import CustomInput from '../ui/CustomInput';
import CustomText from '../ui/CustomText';
import DatePickerField from '../ui/DatePickerField';
import CustomHeader from '../ui/CustomHeader';

const fieldConfigs = [
  { key: 'firstname', label: 'First Name' },
  { key: 'lastname', label: 'Last Name' },
  { key: 'emailid', label: 'Email ID', keyboardType: 'email-address' },
  { key: 'password', label: 'Password', secureTextEntry: true },
  { key: 'jobTitle', label: 'Job Title' },
  { key: 'skills', label: 'Skills (comma-separated)' },
];

export default function SignupScreen({ navigation }) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    emailid: '',
    password: '',
    dob: '',
    jobTitle: '',
    location: '',
    skills: '',
  });

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSignup = () => {
    const { firstname, emailid, password } = formData;
    if (!firstname || !emailid || !password) {
      Alert.alert('Error', 'First name, Email, and Password are required.');
      return;
    }
    if (!validateEmail(emailid)) {
      Alert.alert('Error', 'Invalid email format.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }

    Alert.alert('Success', 'Account created successfully!');
    console.log('Signup Data:', formData);
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Location permission is required.');
          return;
        }
      }

      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleChange('location', `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`);
        },
        (error) => {
          console.log(error.code, error.message);
          Alert.alert('Error', 'Failed to get current location.');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title="Sign Up" onBackPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <CustomText size={22} weight="bold" align="center" style={{ marginBottom: 24 }}>
            Create Your Account
          </CustomText>

          {fieldConfigs.map((field) => (
            <CustomInput
              key={field.key}
              label={field.label}
              value={formData[field.key]}
              onChangeText={(text) => handleChange(field.key, text)}
              keyboardType={field.keyboardType}
              secureTextEntry={field.secureTextEntry}
            />
          ))}

          <DatePickerField
            label="Date of Birth"
            value={formData.dob}
            onChange={(date) => handleChange('dob', date)}
          />

          <CustomInput
            label="Location"
            value={formData.location}
            onChangeText={(text) => handleChange('location', text)}
          />

          <TouchableOpacity
            style={styles.locationButton}
            onPress={requestLocationPermission}
          >
            <CustomText color="#1E90FF" size={14} weight="600">
              Use Current Location
            </CustomText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={onSignup}>
            <CustomText color="#fff" size={18} weight="600">
              Create Account
            </CustomText>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#1E90FF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#1E90FF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  locationButton: {
    borderColor: '#1E90FF',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: -10,
  },
});
