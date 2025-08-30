import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
  View,
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import { useDispatch } from "react-redux";

// Reusable UI components
import CustomHeader from "../ui/CustomHeader";
import CustomInput from "../ui/CustomInput";
import CustomText from "../ui/CustomText";
import DatePickerField from "../ui/DatePickerField";

import { POST_API } from "../utils/api";

const fieldConfigs = [
  { key: "firstname", label: "First Name", required: true },
  { key: "lastname", label: "Last Name" },
  { key: "emailId", label: "Email ID", keyboardType: "email-address", required: true },
  { key: "password", label: "Password", secureTextEntry: true, required: true },
  { key: "jobTitle", label: "Job Title" },
  { key: "skills", label: "Skills (comma-separated)" },
];

export default function SignupScreen({ navigation }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    emailId: "",
    password: "",
    dob: "",
    jobTitle: "",
    location: "",
    skills: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" })); // clear error on change
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.emailId) newErrors.emailId = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.emailId))
      newErrors.emailId = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "At least 6 characters";

    //if (!formData.dob) newErrors.dob = "Date of Birth is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSignup = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await POST_API("signup", { ...formData });
      if (response) {
        navigation.navigate("Login");
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      Alert.alert("Signup Failed", err.message || "Something went wrong.");
    }
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert("Permission Denied", "Location permission is required.");
          return;
        }
      }

      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleChange(
            "location",
            `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`
          );
        },
        () => {
          Alert.alert("Error", "Failed to get current location.");
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title="Sign Up" onBackPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <CustomText
              size={22}
              weight="bold"
              align="center"
              style={{ marginBottom: 20 }}
            >
              Create Your Account
            </CustomText>

            {/* Dynamic Inputs */}
            {fieldConfigs.map((field) => (
              <CustomInput
                key={field.key}
                label={field.label}
                value={formData[field.key]}
                onChangeText={(text) => handleChange(field.key, text)}
                keyboardType={field.keyboardType}
                secureTextEntry={field.secureTextEntry}
                error={errors[field.key]}
              />
            ))}

            {/* DOB */}
            <DatePickerField
              label="Date of Birth"
              value={formData.dob}
              onChange={(date) => handleChange("dob", date)}
              error={errors.dob}
            />

            {/* Location */}
            <CustomInput
              label="Location"
              value={formData.location}
              onChangeText={(text) => handleChange("location", text)}
            />

            <TouchableOpacity
              style={styles.locationButton}
              onPress={requestLocationPermission}
            >
              <CustomText color="#1E90FF" size={14} weight="600">
                Use Current Location
              </CustomText>
            </TouchableOpacity>

            {/* Submit Button */}
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#1E90FF"
                style={{ marginTop: 20 }}
              />
            ) : (
              <TouchableOpacity style={styles.button} onPress={onSignup}>
                <CustomText color="#fff" size={18} weight="600">
                  Create Account
                </CustomText>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  button: {
    backgroundColor: "#1E90FF",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  locationButton: {
    borderColor: "#1E90FF",
    borderWidth: 1.5,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
    backgroundColor: "#f8fbff", // subtle blue tint for secondary feel
  },
});
