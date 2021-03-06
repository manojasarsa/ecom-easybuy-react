import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { wishlistReducer } from "../reducer/wishlistReducer";
import { useAuth } from "./authContext";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
      
	const [ wishlistState, wishlistDispatch ] = useReducer(wishlistReducer, {
		wishlistItems: [],
	});

	const { state: { token } } = useAuth();

	useEffect(() => {
		token
		? (async () => {
			try {
				const response = await axios.get("/api/user/wishlist", {
					headers: { authorization: token },
				});

				if (response.status === 200) {
					wishlistDispatch({ type: "SET_WISHLIST", payload: response.data.wishlist });
				}
				} catch (err) {
					console.error("error", err);
				}
		})()
		: wishlistDispatch({ type: "SET_WISHLIST", payload: [] });
	}, [token]);

	const addToWishlist = async (product) => {
		try {
			const response = await axios.post(
			"/api/user/wishlist",
			{
				product,
			},
			{
				headers: { authorization: token },
			}
			);

			if (response.status === 201) {
				wishlistDispatch({ type: "SET_WISHLIST", payload: response.data.wishlist });
			}
		} catch (err) {
			console.error("error occurred", err.message);
		}
	};

	const removeFromWishlist = async (productId) => {
	  	try {
			const response = await axios.delete(`/api/user/wishlist/${productId}` ,
			{
				headers: { authorization: token }
			});

			if(response.status === 200 ) {
				wishlistDispatch({type: "SET_WISHLIST", payload: response.data.wishlist})
			}
	  	} catch(err) {
		  	console.error("error occured", err.message);
	  	}
  	}

	return (
	<WishlistContext.Provider value={{ wishlistState, wishlistDispatch, addToWishlist, removeFromWishlist }}>
	  {children}
	</WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };