import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackNavOptions, MenuButton} from '../config';
import {FavoritesScreen, MealDetailScreen} from '../../screens';
import {MealsDetailConfig} from './meals';

const FavStack = createStackNavigator();
const FavNavigator = () => {
  return (
    <FavStack.Navigator screenOptions={defaultStackNavOptions}>
      <FavStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({navigation}) => ({
          headerTitle: 'Your Favorites',
          headerLeft: () => MenuButton(navigation),
        })}
      />
      <FavStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealsDetailConfig}
      />
    </FavStack.Navigator>
  );
};

export default FavNavigator;
