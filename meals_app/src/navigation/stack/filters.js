import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackNavOptions, MenuButton} from '../config';
import {FiltersScreen} from '../../screens';

const FiltersStack = createStackNavigator();
const FiltersNavigator = () => {
  return (
    <FiltersStack.Navigator screenOptions={defaultStackNavOptions}>
      <FiltersStack.Screen
        name="Filters"
        component={FiltersScreen}
        options={({navigation}) => ({
          headerTitle: 'Filter Meals',
          headerLeft: () => MenuButton(navigation),
        })}
      />
    </FiltersStack.Navigator>
  );
};

export default FiltersNavigator;
