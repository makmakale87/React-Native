import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackNavOptions, MenuButton} from '../config';
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from '../../screens';
import {CATEGORIES} from '../../data/dummy-data';

export const MealsDetailConfig = ({route}) => ({
  headerTitle: route.params.mealTitle,
});

export const CategoriesConfig = ({navigation}) => ({
  headerTitle: 'Meal Categories',
  headerLeft: () => MenuButton(navigation),
});

export const CategoryMealsConfig = ({route}) => {
  const catId = route.params.categoryId;
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const MealsStack = createStackNavigator();
const MealsNavigator = () => {
  return (
    <MealsStack.Navigator screenOptions={defaultStackNavOptions}>
      <MealsStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={CategoriesConfig}
      />
      <MealsStack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={CategoryMealsConfig}
      />
      <MealsStack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealsDetailConfig}
      />
    </MealsStack.Navigator>
  );
};

export default MealsNavigator;
