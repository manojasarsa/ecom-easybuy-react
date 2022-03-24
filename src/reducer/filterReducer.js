const filterReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY":
        return {
          ...state,
          sortBy: action.payload
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
  
      case "PRICE_RANGE":
        return {
          ...state,
          rangeValue: Number(action.payload.target.value)
        };
      
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

      case "KIDS":
        return {
          ...state, 
          categories: { ...state.categories, kids: !state.categories.kids }
        };

      case "BESTSELLERS":
        return {
          ...state, 
          categories: { ...state.categories, bestsellers: !state.categories.bestsellers }
        };
  
      case "CLEAR":
        return {
          sortBy: null,
          categories: {men: false, women: false, kids: false, bestsellers: false},
          showInventory: true,
          fastDelivery: false,
          rangeValue: 6000
        };

      default:
        return state;
    }
};

export {filterReducer};