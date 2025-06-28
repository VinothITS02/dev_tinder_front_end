import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        navigation.replace("Home");
      } else {
        navigation.replace("Auth");
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B80000" barStyle="light-content" />

      <Image
        source={require('./assets/div_tinder_logo.png')} // 👈 replace with your image path
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        <Text style={styles.cric}>DEV</Text>
        <Text style={styles.heroes}>Tinder</Text>
        <Text style={styles.tm}>™</Text>
      </Text>

      <Text style={styles.versionText}>Version 12.3.1</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B80000', // red background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    backgroundColor: '#B80000',
  },
  title: {
    flexDirection: 'row',
    fontSize: 28,
    marginTop: 10,
    alignItems: 'center',
  },
  cric: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '300',
  },
  heroes: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  tm: {
    fontSize: 12,
    color: '#fff',
    top: -10,
  },
  versionText: {
    position: 'absolute',
    bottom: 30,
    color: '#FFD700', // golden yellow
    fontSize: 14,
  },
});
