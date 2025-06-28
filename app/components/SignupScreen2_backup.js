import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../ui/CustomHeader';

const SignupScreen2 = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    emailid: '',
    password: '',
    gender: '',
    age: '',
    jobTitle: '',
    location: '',
    skills: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Signup Data', JSON.stringify(formData, null, 2));
    // Replace this with backend submission logic
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title="Sign Up" onBackPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.container}>

        {/* Text Input Fields */}
        {[
          { key: 'firstname', label: 'First Name' },
          { key: 'lastname', label: 'Last Name' },
          { key: 'emailid', label: 'Email ID', keyboardType: 'email-address' },
          { key: 'password', label: 'Password', secureTextEntry: true },
          { key: 'age', label: 'Age', keyboardType: 'numeric' },
          { key: 'jobTitle', label: 'Job Title' },
          { key: 'location', label: 'Location' },
          { key: 'skills', label: 'Skills (comma-separated)' },
        ].map(({ key, label, ...props }) => (
          <View key={key} style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              value={formData[key]}
              onChangeText={(value) => handleChange(key, value)}
              {...props}
            />
          </View>
        ))}

        {/* Gender Checkboxes */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.checkboxContainer}>
            {['Male', 'Female'].map((genderOption) => (
              <TouchableOpacity
                key={genderOption}
                style={styles.checkboxOption}
                onPress={() => handleChange('gender', genderOption)}
              >
                <View style={styles.checkbox}>
                  {formData.gender === genderOption && <View style={styles.checked} />}
                </View>
                <Text style={styles.checkboxLabel}>{genderOption}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen2;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 20,
    paddingBottom: 50,
    flexGrow: 1,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#555',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#4CAF50',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
