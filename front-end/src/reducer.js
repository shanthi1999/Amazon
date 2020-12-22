export const initialState = {
    basket: [],
    logUser: false,
    bookdetail: {}
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.value],
            };
        case 'Auth':
            return {
                ...state,
                logUser: action.value
            };
        case 'click':
            return {
                ...state,
                bookdetail: action.value
            }
        default:
            return state;
    }
};
export default reducer;