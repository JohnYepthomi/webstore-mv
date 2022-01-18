const filterDataReducer = (state = [], action) => {
    
    //action.payload will contain an 'id'

    switch (action.type) {
        case 'GET_FILTER_DATA':
            return state;
        default:
            return state;
    }
}

export default filterDataReducer;