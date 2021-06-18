import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../../components/MealList';
import DefaultText from '../../components/DefaultText';
import styles from './styles';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
