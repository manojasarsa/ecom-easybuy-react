import "./products.css";
import { ProductCard } from "../../components";
import { useProduct, useFilter } from "../../contexts";
import { sortData, filterData, sortByCategory, sortRange, sortRating, searchByName} from "../../utils/filterMethods";

const Products = () => {
    const {products, loader, error} = useProduct();
    const { state } = useFilter();
    const { men, women, boys, girls } = state.categories;
      
    const getFilteredList = filterData(products, state.showInventory, state.fastDelivery);
    const getCategoryList = sortByCategory(getFilteredList, men, women, boys, girls);
    const getSortRangeList = sortRange(getCategoryList, state.rangeValue);  
    const getSortedList = sortData(getSortRangeList, state.sortBy);     
    const getRatingList = sortRating(getSortedList, state.rating); 
    const getSearchedItem = searchByName(getRatingList, state.searchQuery);

    return (
        <main className="product_container">
            <div className="product_heading flex flex_justify_start flex_align_center">
                <h3>Showing All Products</h3>
                <p>(Showing {getSearchedItem.length} Products)</p>
            </div>
            
            <div className="product_list">
                {loader && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {getSearchedItem.map((item) => <ProductCard key={item._id} product={item} /> )}
            </div>
        </main>
    );
}

export {Products};