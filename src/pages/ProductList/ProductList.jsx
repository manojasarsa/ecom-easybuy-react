import "./productlist.css";
import {Header, Filters, Products} from "../../components";

const ProductList = () => {
    return(
        <div class="product_main_wrapper">
            <Header />
            <Filters />
            <Products />
        </div>
    );
}

export {ProductList};