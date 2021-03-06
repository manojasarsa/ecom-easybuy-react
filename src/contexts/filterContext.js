import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const filterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterState, dispatch] = useReducer(filterReducer, {
    sortBy: null,
    categories: {men: false, women: false, boys: false, girls: false},
    showInventory: true,
    fastDelivery: false,
    rangeValue: 6000,
    rating: null,
    searchQuery: ""
  });

  return (
    <filterContext.Provider value={{ filterState, dispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { useFilter, FilterProvider };