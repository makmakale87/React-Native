import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../../components/MealList';
import DefaultText from '../../components/DefaultText';
import styles from './styles';

const CategoryMealsScreen = props => {
  const catId = props.route.params.categoryId;

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
