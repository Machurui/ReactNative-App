import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// SCREENS
import HomeScreen from './Screens/HomeScreen';
import QuestionScreen from './Screens/QuestionScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home Screen
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Accueil',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// Question Screen
const QuestionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          title: 'Questionnaire',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// Profil Screen
const ProfilStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profil',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// Main Navigator
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Questionnaire') {
              iconName = focused ? 'help-circle' : 'help-circle-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'ellipsis-horizontal-sharp' : 'ellipsis-horizontal-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Questionnaire" component={QuestionStack} />
        <Tab.Screen name="Profil" component={ProfilStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
