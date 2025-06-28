import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomText from '../ui/CustomText';
import CustomInput from '../ui/CustomInput';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/slice/userSlice';
import { POST_API } from '../utils/api';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('vinothkumar@gmail.com');
  const [password, setPassword] = useState('vinoth@123');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await POST_API('login', { emailId: email, password });
      if (response) {
        dispatch(setUserDetails(response))
        navigation.navigate("Home");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <View style={styles.safeArea}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <CustomText size={22} weight="bold" align="center" style={{ marginBottom: 30 }}>
          Welcome
        </CustomText>

        <CustomInput
          placeholder={"Email"}
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={<Ionicons name="mail-outline" size={20} color="#888" />}
        />

        <CustomInput
          placeholder={"Password"}
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          leftIcon={<Ionicons name="lock-closed-outline" size={20} color="#888" />}
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          }
        />

        <TouchableOpacity style={styles.forgotContainer}>
          <CustomText size={14} color="#444">Forgot Password?</CustomText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <CustomText size={16} weight="bold" color="#fff">Login</CustomText>
          )}
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <CustomText>Don't have an account? </CustomText>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <CustomText color="#007bff" weight="bold">Sign Up</CustomText>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007bff',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
