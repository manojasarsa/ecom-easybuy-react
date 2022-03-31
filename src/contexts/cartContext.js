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
			return state;
	}
};


const CartProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, {
		cartItems: [],
	});

	const { state } = useAuth();

	useEffect(() => {
		state.isAuth
		? (async () => {
			try {
				const response = await axios.get("/api/user/cart", {
					headers: { authorization: state.token },
				});

				if (response.status === 200) {
					console.log("response.status is success");
					cartDispatch({ type: "SET_CART", payload: response.data.cart });
				}
				} catch (err) {
					console.log("error", err);
				}
		})()
		: cartDispatch({ type: "SET_CART", payload: [] });
	}, [state.isAuth]);

	const addToCart = async (product) => {
		try {
			const response = await axios.post(
			"/api/user/cart",
			{
				product,
			},
			{
				headers: { authorization: state.token },
			}
			);

			if (response.status === 201) {
				cartDispatch({ type: "SET_CART", payload: response.data.cart });
			}
		} catch (err) {
			console.log("error occurred", err.message);
		}
	};

	const removeFromCart = async (productId) => {
	  	try {
			const response = await axios.delete(`/api/user/cart/${productId}` ,
			{
				headers: { authorization: state.token }
			});

			if(response.status === 200 ) {
				cartDispatch({type: "SET_CART", payload: response.data.cart})
			}
	  	} catch(err) {
		  	console.log("error occured", err.message);
	  	}
  	}

	return (
	<CartContext.Provider value={{ cartState, cartDispatch, addToCart, removeFromCart }}>
	  {children}
	</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
