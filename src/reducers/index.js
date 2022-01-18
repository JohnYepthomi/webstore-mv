import counterReducer from './counter';
import isLoggedReducer from './isLogged'
import themeReducer from './theme';

import productsReducer from './products';
import homeDataReducer from './homeData'
import filterDataReducer from './filterData';
import categoriesReducer from  './categories';
import relatedProductsReducer from './relatedProducts';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  theme: themeReducer,
  products: productsReducer,
  home: homeDataReducer,
  filter: filterDataReducer,
  categories: categoriesReducer,
  relatedProducts: relatedProductsReducer
});

export default rootReducer;