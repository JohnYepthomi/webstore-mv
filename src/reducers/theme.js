const themeReducer = (state=false, action) =>{
    switch (action.type) {
        case 'DARK_THEME':
            return !state;
        case 'LIGHT_THEME':
            return !state;
        default:
            return state
    }
}

export default themeReducer;