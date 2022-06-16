const orderReducer = (state, action) => {
    switch (action.type) {
        case "INITIALIZE":
            return {
                ...state,
                isLoading: true,
                error: ""
            };

        case "SET_ORDERS":
            return {
                ...state,
                isLoading: false,
                orders: action.payload
            };

        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export { orderReducer };