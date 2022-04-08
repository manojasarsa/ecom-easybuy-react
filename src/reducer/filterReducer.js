const filterReducer = (state, action) => {
    switch (action.type) {
      case "MEN":
        return {
          ...state, 
          categories: { ...state.categories, men: !state.categories.men }
        };

      case "WOMEN":
        return {
          ...state, 
          categories: { ...state.categories, women: !state.categories.women }
        };

      case "BOYS":
        return {
          ...state, 
          categories: { ...state.categories, boys: !state.categories.boys }
        };

      case "GIRLS":
        return {
          ...state, 
          categories: { ...state.categories, girls: !state.categories.girls }
        };

      case "PRICE_RANGE":
        return {
          ...state,
          rangeValue: Number(action.payload.target.value)
        };

      case "SORT_BY":
        return {
          ...state,
          sortBy: action.payload
        };
      
      case "RATING":
        return {
          ...state,
          rating: action.payload
        };
  
      case "INCLUDE_OUT_OF_STOCK":
        return {
          ...state,
          showInventory: !state.showInventory
        };
  
      case "FAST_DELIVERY":
        return {
          ...state,
          fastDelivery: !state.fastDelivery
        };
  
      case "CLEAR":
        return {
          sortBy: null,
          categories: {men: false, women: false, boys: false, girls: false},
          showInventory: true,
          fastDelivery: false,
          rangeValue: 6000,
          rating: null,
          searchQuery: ""
        };
      
      case "SET_SEARCH_QUERY":
        return {
          ...state,
          searchQuery: action.payload,
        };
      
      default:
        return state;
    }
};

export {filterReducer};