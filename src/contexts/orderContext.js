import { createContext, useContext, useReducer } from "react";

const OrderContext = createContext();

const initialState = {
    orders: [],
    isLoading: false,
    error: "",
}

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

const OrderProvider = ({ children }) => {

    const [orderState, orderDispatch] = useReducer(orderReducer, initialState);

    return (
        <OrderContext.Provider value={{}} >
            {children}
        </OrderContext.Provider>
    )
}

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };