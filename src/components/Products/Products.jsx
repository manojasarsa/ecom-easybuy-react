import "./products.css";
import {ProductCard} from "../../components";
import { useProduct } from "../../contexts/productContext";
import { useFilter } from "../../contexts/filterContext";
import {sortData, filterData, sortByCategory, sortRange, sortRating} from "../../utils/filterMethods";

const Products = () => {
    const {products, loader, error} = useProduct();
    const { state } = useFilter();
    const { men, women, boys, girls } = state.categories;
    
    const getSortedList = sortData(products, state.sortBy);   
    const getFilteredList = filterData(                         
        getSortedList,
        state.showInventory,
        state.fastDelivery
    );
    const getCategoryList = sortByCategory(getFilteredList, men, women, boys, girls);
    const getSortRangeList = sortRange(getCategoryList, state.rangeValue);      
    const getRatingList = sortRating(getSortRangeList, state.rating); 

    return (
        <main className="product_container">
            <div className="product_heading flex flex_justify_start flex_align_center">
                <h3>Showing All Products</h3>
                <p>(Showing 10 Products)</p>
            </div>
            
            <div className="product_list">
                {loader && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {getRatingList.map((item) => <ProductCard key={item._id} product={item} /> )}
            </div>
        </main>
    );
}

export {Products};