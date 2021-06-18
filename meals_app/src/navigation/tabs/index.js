import React from 'react';
import {Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import MealsNavigator from '../stack/meals';
import FavNavigator from '../stack/favorites';

const Tabs = createMaterialBottomTabNavigator();
const MealsFavTabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      }}>
      <Tabs.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: tabInfo => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
          tabBarColor: Colors.primaryColor,
          tabBarLabel: (
            <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavNavigator}
        options={{
          tabBarIcon: tabInfo => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
          tabBarColor: Colors.accentColor,
          tabBarLabel: (
            <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default MealsFavTabNavigator;
