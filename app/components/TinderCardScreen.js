import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TinderCardScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/dev_logo.png')} style={styles.logo} />
        <Icon name="options-outline" size={24} color="#444" />
      </View>

      {/* Profile Card */}
      <ImageBackground
        source={require('../assets/image.jpg')}
        style={styles.card}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.overlay} />

        <View style={styles.profileInfo}>
          <View style={styles.tagsRow}>
            <Text style={styles.tag}>Nearby</Text>
            <Text style={styles.tag}>New here</Text>
          </View>

          <Text style={styles.name}>Sakshi <Text style={styles.age}>28</Text></Text>
          <View style={styles.matchRow}>
            <MaterialIcons name="tune-variant" size={18} color="#fff" />
            <Text style={styles.matchText}> Matched 3 Preferences</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.preferences}>
            <Text style={styles.chip}>Masters ✅</Text>
            <Text style={styles.chip}>Phone caller ✅</Text>
            <Text style={styles.chip}>Non-smoker ✅</Text>
          </ScrollView>
        </View>
      </ImageBackground>

      {/* Bottom Buttons */}
      <View style={styles.bottomActions}>
        {['reload', 'close', 'star', 'heart', 'flash'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <MaterialIcons name={icon} size={26} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  card: {
    margin: 20,
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  profileInfo: {
    padding: 16,
  },
  tagsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#00695c',
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginRight: 8,
    fontSize: 12,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  age: {
    fontSize: 24,
    fontWeight: '400',
  },
  matchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  matchText: {
    color: '#fff',
    fontSize: 14,
  },
  preferences: {
    marginTop: 10,
    flexDirection: 'row',
  },
  chip: {
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
    marginRight: 8,
    fontSize: 13,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#aaa',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
