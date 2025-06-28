import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from './SplashScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import BottomTabs from './BottomTabs';

const AuthLoadingStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

// 1. Auth stack for login/signup
const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
  </AuthStack.Navigator>
);

// 2. App stack (after login)
const AppNavigator = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="MainTabs" component={BottomTabs} />
  </AppStack.Navigator>
);

// 3. Auth loading (shows Splash, then navigates)
const AuthLoadingNavigator = () => (
  <AuthLoadingStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthLoadingStack.Screen name="Splash" component={SplashScreen} />
    <AuthLoadingStack.Screen name="Auth" component={AuthNavigator} />
    <AuthLoadingStack.Screen name="App" component={AppNavigator} />
  </AuthLoadingStack.Navigator>
);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AuthLoadingNavigator />
    </NavigationContainer>
  );
}
