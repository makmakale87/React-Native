import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Colors from '../../constants/Colors';
import MealsFavTabNavigator from '../tabs';
import FiltersNavigator from '../stack/filters';

const Drawer = createDrawerNavigator();
function MainNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}>
      <Drawer.Screen
        name="MealsFavs"
        component={MealsFavTabNavigator}
        options={{drawerLabel: 'Meals'}}
      />
      <Drawer.Screen name="Filters" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
}

export default MainNavigator;
