import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../../data/dummy-data';
import CategoryGridTile from '../../components/CategoryGridTile';

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
