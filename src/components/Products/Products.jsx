import "./products.css";
import {ProductCard} from "../../components";
import { useProduct } from "../../contexts/productContext";

const Products = () => {
    const {products, loader, error} = useProduct();

    return (
        <main className="product_container">
            <div className="product_heading flex flex_justify_start flex_align_center">
                <h3>Showing All Products</h3>
                <p>(Showing 10 Products)</p>
            </div>
            
            <div className="product_list">
                {loader && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {products.map((item) => <ProductCard key={item._id} product={item} /> )}
            </div>
        </main>
    );
}

export {Products};