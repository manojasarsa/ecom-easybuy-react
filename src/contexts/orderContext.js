import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "./authContext";
import { orderReducer } from "../reducer/orderReducer";

const OrderContext = createContext();

const initialState = {
    orders: [],
    isLoading: false,
    error: "",
}

const OrderProvider = ({ children }) => {

    const [orderState, orderDispatch] = useReducer(orderReducer, initialState);

    const { state: { token } } = useAuth();

    useEffect(() => {
        (async () => {
            if (token) {
                try {
                    orderDispatch({ type: "INITIALIZE "});
                    const res = await axios.get("/api/user/orders", 
                        { headers: { authorization: token } },
                    );

                    if (res.status === 200) {
                        orderDispatch({ type: "SET_ORDERS", payload: res.data.orders });
                    }
                } catch (err) {
                    orderDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
                }
            } else {
                orderDispatch({ type: "SET_ORDERS", payload: [] });
            }
        })();
    }, [token]);

    const addOrder = async (order, token) => {
        try {
            orderDispatch({ type: "INITIALIZE" });
            const res = await axios.post("/api/user/orders", 
                { ...order },
                { headers: { authorization: token } },
            );

            if (res.status === 201) {
                orderDispatch({ type: "SET_ORDERS", payload: res.data.orders });
                console.log("Order has been placed successfully!");
            }
        } catch (err) {
            orderDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
        }
    }

    return (
        <OrderContext.Provider value={{ orderState, orderDispatch, addOrder }} >
            {children}
        </OrderContext.Provider>
    )
}

const useOrder = () => useContext(OrderContext);

export { useOrder, OrderProvider };