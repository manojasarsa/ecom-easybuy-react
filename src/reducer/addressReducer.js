const addressReducer = (state, action) => {
    switch(action.type) {
        case "INITIALIZE": 
            return { ...state,
                isLoading: true,
                error: ""
            };

        case "SET_ADDRESS":
            return { ...state,
                isLoading: false,
                address: action.payload
            };

        case "SET_ERROR":
            return { ...state,
                isLoading: false, 
                error: action.payload
            };

        default: 
            return state;
    }
};

export { addressReducer };