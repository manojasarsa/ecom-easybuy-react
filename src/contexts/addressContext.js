import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./authContext";

const AddressContext = createContext();

const initialState = {
    address: [],
    isLoading: false,
    error: "",
}

const addressReducer = (state, action) => {
    switch(action.type) {
        case "INITIALIZE": 
            return { ...state,
                isLoading: true,
                error: ""
            };

        case "SET_ADDRESS":
            return { ...state,
                isLoading: false,
                address: action.payload
            };

        case "SET_ERROR":
            return { ...state,
                isLoading: false, 
                error: action.payload
            };

        default: 
            return state;
    }
};

const AddressProvider = ({children}) => {

    const [addressState, addressDispatch] = useReducer(addressReducer, initialState);

    const { state: {token} } = useAuth();

    useEffect(() => {
        (async () => {
            if (token) {
                try {
                    addressDispatch({ type: "INITIALIZE" });
                    const response = await getAllAddress(token);
                    
                    if (response.status === 200) {
                        addressDispatch({ type: "SET_ADDRESS", payload: response.data.address });
                    }
                } catch (err) {
                    addressDispatch({ type: "SET_ERROR", payload: err.response.data[0].errors });
                }
            } else {
                addressDispatch({ type: "SET_ADDRESS", payload: [] });
            }
        })();
    }, [token]);

    const addNewAddress = async (address) => {
        try {
          addressDispatch({ type: "INITIALIZE" });
          const { status, data } = await addAddress(address, token);

          if (status === 201) {
            addressDispatch({ type: "SET_ADDRESS", payload: data.address });
          }
        } catch (err) {
          addressDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
        }
      };
    
      const editAddress = async (address) => {
        try {
          addressDispatch({ type: "INITIALIZE" });
          const { status, data } = await updateAddress(address, token);
    
          if (status === 200) {
            addressDispatch({ type: "SET_ADDRESS", payload: data.address });
          }
        } catch (err) {
          addressDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
        }
      };
    
      const deleteAddress = async (address) => {
        try {
          addressDispatch({ type: "INITIALIZE" });
          const { status, data } = await removeAddress(address, token);
    
          if (status === 200) {
            addressDispatch({ type: "SET_ADDRESS", payload: data.address });
          }
        } catch (err) {
          addressDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
        }
      };

    return (
        <AddressContext.Provider value={{ addressState, addressDispatch, addNewAddress, editAddress, deleteAddress }}>
            {children}
        </AddressContext.Provider>
    )
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };