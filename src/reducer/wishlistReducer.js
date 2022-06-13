export const wishlistReducer = (state, action) => {
	switch (action.type) {
	case "SET_WISHLIST":
		return {
			...state,
			wishlistItems: action.payload,
		};
		default:
			return state;
	}
};