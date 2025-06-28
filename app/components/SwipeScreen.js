import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const cards = [
  {
    name: 'Sakshi',
    age: 28,
    tags: ['Nearby', 'New here'],
    preferences: ['Masters ✅', 'Phone caller ✅', 'Non-smoker ✅'],
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Ayesha',
    age: 26,
    tags: ['Verified', 'Popular'],
    preferences: ['Doctor ✅', 'Dog lover ✅', 'Traveler ✅'],
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Priya',
    age: 30,
    tags: ['Nearby'],
    preferences: ['Engineer ✅', 'Reader ✅', 'Vegetarian ✅'],
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

export default function SwipeScreen() {
  const renderCard = (card) => (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.row}>
          {card.tags.map((tag, idx) => (
            <Text key={idx} style={styles.tag}>{tag}</Text>
          ))}
        </View>
        <Text style={styles.name}>{card.name}, {card.age}</Text>
        <Text style={styles.subtitle}>Matched {card.preferences.length} Preferences</Text>
        <View style={styles.row}>
          {card.preferences.map((pref, idx) => (
            <Text key={idx} style={styles.pref}>{pref}</Text>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={renderCard}
        backgroundColor="transparent"
        stackSize={2}
        stackSeparation={15}
        cardIndex={0}
        animateCardOpacity
        disableTopSwipe
        disableBottomSwipe
      />
      <View style={styles.bottomBar}>
        <Icon name="undo" size={28} style={styles.iconBtn} />
        <Icon name="times" size={28} style={[styles.iconBtn, { color: 'red' }]} />
        <Icon name="star" size={28} style={[styles.iconBtn, { color: '#3CAEF5' }]} />
        <Icon name="heart" size={28} style={[styles.iconBtn, { color: 'green' }]} />
        <Icon name="bolt" size={28} style={[styles.iconBtn, { color: 'purple' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  card: {
    borderRadius: 12,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
    width: width - 40,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 400,
  },
  info: {
    padding: 16,
    backgroundColor: '#000',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 6,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 6,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
  tag: {
    backgroundColor: '#088466',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
    fontSize: 12,
  },
  pref: {
    backgroundColor: '#2e2e2e',
    color: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 8,
    marginBottom: 6,
    fontSize: 13,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    alignItems: 'center',
  },
  iconBtn: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 32,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
});
