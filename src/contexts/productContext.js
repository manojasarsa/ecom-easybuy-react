import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        ( async() => {
            try{
                setLoader(true);
                setError("");
                const response = await axios.get("/api/products");
                if(response.status ===  200) {
                    setLoader(false);
                    setProducts(response.data.products);
                }
            } catch(error) {
                setError(error);
                setLoader(false);
            }
        }) ()
    },[])

    return (
        <ProductContext.Provider value={{products, loader, error}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export {useProduct, ProductProvider};