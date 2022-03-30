import axios from "axios";
import { createContext, useReducer } from "react";
import { useContext } from "react";
// import { useEffect } from "react";
import { useAuth } from "./authContext";

const CartContext = createContext();

const cartReducer = (state, action) => {
    // const matchedItem = state.cartItems.find((p) => p._id === action.payload._id);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
            ...state,
            cartItems: action.payload
        }
    default: 
        console.log("in default case");
    }
  };

  const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, {
      cartItems: []
    });

    const { state } = useAuth();

    // useEffect( () => {
    //     state.token
    //     ? (async () => {
    //         try{
    //             console.log("inside try")
    //             const response = await axios.get("/api/user/cart", {
    //                 headers: {authorization: state.token},
    //             });

    //             console.log("after axios try")
    //             if(response.status === 200) {
    //                 console.log("success");
    //             }
    //         } catch (err) {
    //             console.log("catch error");
    //         }
    //     })()
    //     : console.log("isAuth is false");
    // },[state.token]);
  
    return (
      <CartContext.Provider value={{ cartState, cartDispatch }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  const useCart = () => useContext(CartContext);
  
  export { useCart, CartProvider };