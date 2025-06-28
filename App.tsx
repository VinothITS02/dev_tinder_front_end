import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import AppNavigator from './app/AppNavigator';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
