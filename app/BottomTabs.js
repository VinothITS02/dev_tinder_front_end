import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import screens
import HomeScreen from './components/HomeScreen';
import FeedScreen from './components/FeedScreen';
import NotificationsScreen from './components/NotificationsScreen';
import ProfileScreen from './components/ProfileScreen';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Feed':
              iconName = 'list-outline';
              break;
            case 'Notifications':
              iconName = 'notifications-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Feed" component={FeedScreen} screenOptions={{headerShown:false}} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
