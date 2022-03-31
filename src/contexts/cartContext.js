import axios from "axios";
import { createContext, useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useAuth } from "./authContext";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cartItems: action.payload,
      };
    	default:
	console.log("in default case");
	return state; 
  }
};


const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  const { state } = useAuth();

  console.log("State values:", state);

  useEffect(() => {
    console.log("ISAUTH:", state.isAuth);
    state.isAuth
      ? (async () => {
          try {
            console.log("inside try");
            const response = await axios.get("/api/user/cart", {
              headers: { authorization: state.token },
            });

            if (response.status === 200) {
              console.log("response.status is success");
              cartDispatch({ type: "SET_CART", payload: response.data.cart });
            }
          } catch (err) {
            console.log("error", err);
            console.log("GET request failed");
          }
        })()
      : cartDispatch({ type: "SET_CART", payload: [] });
  }, [state.isAuth]);

  const addToCart = async (product) => {
    console.log("inside addtocartfunction");
    try {
      console.log("inside try2");
      console.log("token:", state.token);
      console.log("product", product);
      const response = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: { authorization: state.token },
        }
      );

      console.log("before status");

      if (response.status === 201) {
       	cartDispatch({ type: "SET_CART", payload: response.data.cart });
      }
    } catch (err) {
      console.log("error occurred", err.message);
    }
  };

//   const removeFromCart = () => {
// 	  try {
// 		  const response = await axios.delete(`/api/user/cart:${id}` ,
// 		  {
// 			headers: { authorization: state.token }
// 		  });

// 		  if(response.status === 200 ) {
// 			cartDispatch({type: "SET_CART", payload: response.data.cart})
// 		  }
// 	  } catch(err) {
// 		  console.log("error occured", err.message);
// 	  }
//   }

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
