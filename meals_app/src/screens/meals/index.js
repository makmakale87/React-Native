import React, {useCallback, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../../store/actions/meals';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import MealsDetailView from './view';

const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.route.params.mealId;
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId),
  );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName={currentMealIsFavorite ? 'ios-star' : 'ios-star-outline'}
            onPress={toggleFavoriteHandler}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation, currentMealIsFavorite, toggleFavoriteHandler]);

  return <MealsDetailView selectedMeal={selectedMeal} />;
};

export default MealDetailScreen;
