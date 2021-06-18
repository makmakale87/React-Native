import React, {useState, useCallback, useLayoutEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setFilters} from '../../store/actions/meals';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/HeaderButton';
import FilterView from './view';

const FiltersScreen = props => {
  const {navigation} = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [navigation, saveFilters]);

  return (
    <FilterView
      isGlutenFree={isGlutenFree}
      setIsGlutenFree={setIsGlutenFree}
      isLactoseFree={isLactoseFree}
      setIsLactoseFree={setIsLactoseFree}
      isVegan={isVegan}
      setIsVegan={setIsVegan}
      isVegetarian={isVegetarian}
      setIsVegetarian={setIsVegetarian}
    />
  );
};

export default FiltersScreen;
