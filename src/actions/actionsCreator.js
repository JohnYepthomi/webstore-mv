import * as ATYPES from './actionTypes';

export const increment = (incrementBy) =>{
  return dispatch =>{
    setTimeout(()=>{
      dispatch(incrementAsync(incrementBy));
    },5000)
  }
}

export const incrementAsync = (incrementBy) =>{
  return {
    type: ATYPES.INCREMENT,
    payload: incrementBy
  }
}

export const decrement = () =>{
  return {
    type: ATYPES.DECREMENT,
  }
}

export const signin = () =>{
  return {
    type: ATYPES.SIGN_IN
  }
}

export const darkMode = () =>{
  return {
    type: ATYPES.DARK_THEME
  }
}

export const lightMode = () =>{
  return {
    type: ATYPES.LIGHT_THEME
  }
}

// STORE ACTION CREATORS
export const  getAsyncProducts = ( limit ) => {
  return dispatch =>{
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then(res=>res.json())
        .then(json=>dispatch( getProducts(json)) );
  }
}

export const getProducts = ( products ) => {
  return {
    type: ATYPES.GET_PRODUCTS,
    payload: products
  }
}

export const getAllCategories = () => {
  return {
    type: ATYPES.GET_ALL_CATEGORIES,
  }
}

export const getHomeData = () => {
  return {
    type: ATYPES.GET_HOME_DATA,
  }
}

export const getRelatedProducts = ( id ) => {
  return {
    type: ATYPES.GET_RELATED_PRODUCTS,
    payload: id
  }
}

export const getFilterData = ( id ) => {
  return {
    type: ATYPES.GET_FILTER_DATA,
    payload: id
  }
}