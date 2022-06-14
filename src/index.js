import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider, FilterProvider, AuthProvider, CartProvider, WishlistProvider } from "./contexts";
import { AddressProvider } from "./contexts/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <AddressProvider>
                    <WishlistProvider>
                        <CartProvider>
                            <ProductProvider>
                                <FilterProvider>
                                    <App />
                                </FilterProvider>
                            </ProductProvider>
                        </CartProvider>
                    </WishlistProvider>
                </AddressProvider>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
