import "./productlist.css";
import {Header, Filters, Products} from "../../components";
import { useState } from "react";
import { MobileFilterBar } from "../../components/MobileFilterBar/MobileFilterBar";

const ProductList = () => {

    const [openFilter, setOpenFilter] = useState(false);
    return(
        <div className="product_main_wrapper">
            <Header />
            <Filters />
            {openFilter ? <MobileFilterBar /> : <Products />}
            <button 
                className="mobile_filter_btn"
                onClick={() => setOpenFilter((prev) => !prev)}>
                {openFilter ? "Apply" : "Filters" } 
            </button>
        </div>
    );
}

export {ProductList};