import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import AppNavigator from './app/AppNavigator';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import appStore from './app/redux/appStore';
import { ThemeProvider } from './app/theme/ThemeContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <ThemeProvider>
      <Provider store={appStore}>
        <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
