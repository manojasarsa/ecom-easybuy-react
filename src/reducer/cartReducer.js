export const cartReducer = (state, action) => {
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