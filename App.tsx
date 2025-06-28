import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import AppNavigator from './app/AppNavigator';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import appStore from './app/redux/appStore';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <Provider store={appStore}>
      <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
