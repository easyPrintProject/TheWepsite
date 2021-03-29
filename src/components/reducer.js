const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'REMOVE_USER':
            return {
                ...state,
                user:{}
            };
        case 'SET_ERROR':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;