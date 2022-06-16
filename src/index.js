import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider, FilterProvider, AuthProvider, CartProvider, WishlistProvider } from "./contexts";
import { AddressProvider } from "./contexts/addressContext";
import { OrderProvider } from "./contexts/orderContext";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <WishlistProvider>
                    <CartProvider>
                        <ProductProvider>
                            <FilterProvider>
                                <AddressProvider>
                                    <OrderProvider>
                                        <App />
                                    </OrderProvider>
                                </AddressProvider>
                            </FilterProvider>
                        </ProductProvider>
                    </CartProvider>
                </WishlistProvider>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
