import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { addressReducer } from "../reducer/addressReducer";
import { useAuth } from "./authContext";

const AddressContext = createContext();

const initialState = {
    address: [],
    isLoading: false,
    error: "",
}

const AddressProvider = ({ children }) => {

    const [addressState, addressDispatch] = useReducer(addressReducer, initialState);

    const { state: { token } } = useAuth();

    useEffect(() => {
        (async () => {
            if (token) {
                try {
                    addressDispatch({ type: "INITIALIZE" });
                    const response = await axios.get("/api/user/address",
                        { headers: { authorization: token } },
                    );

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
            const { status, data } = await axios.post("/api/user/address",
                { address },
                { headers: { authorization: token } },
            );

            if (status === 201) {
                addressDispatch({ type: "SET_ADDRESS", payload: data.address });
            }
        } catch (err) {
            addressDispatch({ type: "SET_ERROR", error: err.response.data[0].errors });
        }
    };

    const editAddress = async (address) => {
        console.log("address in edit ", address);
        try {
            addressDispatch({ type: "INITIALIZE" });
            const { status, data } = await axios.post(`/api/user/address/${address._id}`,
                { address },
                { headers: { authorization: token } },
            );
            console.log("in edit", data)
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
            const { status, data } = await axios.delete(`/api/user/address/${address._id}`,
                { headers: { authorization: token } },
            );

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