import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#007bff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  backButton: {
    paddingRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});
