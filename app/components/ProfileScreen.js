import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProfileScreen({ navigation }) {
  const userDetails = useSelector((store) => store.user);
  const { user } = userDetails;
  const dispatch = useDispatch()

  const handleMenuPress = (label) => {
    Alert.alert(`${label} pressed`);
  };

  const handleLogout_1 = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(json.message || 'Logout failed');
      }
      dispatch(logout());
      await AsyncStorage.setItem("isLoggedIn", "false");
      navigation.navigate("Auth");

    } catch (err) {
      Alert.alert('Login Failed', err.message || 'Please check your credentials.');
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => { handleLogout_1(); }
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.firstName} {user?.lastName}</Text>
        <Text style={styles.email}>{user?.emailId}</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menu}>
        <MenuItem icon="settings-outline" label="Settings" onPress={() => navigation.navigate('ChangeTheme')} />
        <MenuItem icon="help-circle-outline" label="Help & Support" onPress={() => handleMenuPress('Help')} />
        <MenuItem icon="log-out-outline" label="Logout" onPress={() => handleLogout('Logout')} />
      </View>
    </View>
  );
}

const MenuItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon name={icon} size={22} color="#333" style={styles.menuIcon} />
    <Text style={styles.menuLabel}>{label}</Text>
    <Icon name="chevron-forward" size={20} color="#999" style={{ marginLeft: 'auto' }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 15,
    color: '#222',
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  menu: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuLabel: {
    fontSize: 16,
    color: '#333',
  },
});
