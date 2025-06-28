import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from './SplashScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import BottomTabs from './BottomTabs';

// Profile sub-page
import ChangeTheme from './components/ChangeTheme';

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

// 2. App stack (after login) — BottomTabs (no header), others (header shown)
const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={BottomTabs}
      options={{ headerShown: false }} // ✅ Hide header for tab navigator
    />
    <AppStack.Screen
      name="ChangeTheme"
      component={ChangeTheme}
      options={{ title: 'Change Theme' }} // ✅ Header visible
    />
  </AppStack.Navigator>
);

// 3. Splash logic to decide between Auth and App flow
const AuthLoadingNavigator = () => (
  <AuthLoadingStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthLoadingStack.Screen name="Splash" component={SplashScreen} />
    <AuthLoadingStack.Screen name="Auth" component={AuthNavigator} />
    <AuthLoadingStack.Screen name="Home" component={AppNavigator} />
  </AuthLoadingStack.Navigator>
);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AuthLoadingNavigator />
    </NavigationContainer>
  );
}
