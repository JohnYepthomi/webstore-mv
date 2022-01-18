const homeDataReducer = (state= [], action) =>{
    switch (action.type) {
        case 'GET_HOME_DATA':
            return state
        default:
            return state;
    }
}

export default homeDataReducer;