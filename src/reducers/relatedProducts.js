const relatedProductsReducer = (state= [], action) =>{
    switch (action.type) {
        case 'GET_RELATED_PRODUCTS':
            return state;
        default:
            return state;
    }
}

export default relatedProductsReducer;