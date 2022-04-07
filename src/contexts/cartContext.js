import axios from "axios";
import { createContext, useReducer, useEffect, useContext } from "react";
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

	const { state: { token } } = useAuth();

	useEffect(() => {
		token
		? (async () => {
			try {
				const response = await axios.get("/api/user/cart", {
					headers: { authorization: token },
				});

				if (response.status === 200) {
					cartDispatch({ type: "SET_CART", payload: response.data.cart });
				}
				} catch (err) {
					console.error("error", err);
				}
		})()
		: cartDispatch({ type: "SET_CART", payload: [] });
	}, [token]);

	const addToCart = async (product) => {
		try {
			const response = await axios.post(
			"/api/user/cart",
			{
				product,
			},
			{
				headers: { authorization: token },
			}
			);

			if (response.status === 201) {
				cartDispatch({ type: "SET_CART", payload: response.data.cart });
			}
		} catch (err) {
			console.error("error occurred", err.message);
		}
	};

	const removeFromCart = async (productId) => {
	  	try {
			const response = await axios.delete(`/api/user/cart/${productId}` ,
			{
				headers: { authorization: token }
			});

			if(response.status === 200 ) {
				cartDispatch({type: "SET_CART", payload: response.data.cart})
			}
	  	} catch(err) {
		  	console.error("error occured", err.message);
	  	}
  	}
	  
	const updateQty = async (typeValue, productId) => {
		try {
		  const response = await axios.post(`/api/user/cart/${productId}` ,
		  {
			  action: { type: typeValue }
		  },
		  {
			  headers: { authorization: token }
		  });

		  if(response.status === 200 ) {
			  cartDispatch({type: "SET_CART", payload: response.data.cart})
		  }
		} catch(err) {
			console.error("error occured", err.message);
		}
	}

	return (
	<CartContext.Provider value={{ cartState, cartDispatch, addToCart, removeFromCart, updateQty }}>
	  {children}
	</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
