import "./products.css";
import {ProductCard} from "../../components";
import { useProduct } from "../../contexts/productContext";
import { useFilter } from "../../contexts/filterContext";

const filterData = (productList, showInventory, fastDelivery) =>
  productList
    .filter((item) => (showInventory ? true : item.inStock))
    .filter((product) => (fastDelivery ? product.fastDelivery : true));

const sortData = (productList, sortBy) =>
    sortBy === "LOW_TO_HIGH"
    ? [...productList].sort((a, b) => a.discountedPrice - b.discountedPrice)
    : sortBy === "HIGH_TO_LOW"
    ? [...productList].sort((a, b) => b.discountedPrice - a.discountedPrice)
    : productList;

const sortRange = (productList, rangeValue) =>
    productList.filter((item) => item.discountedPrice <= rangeValue);

const sortByCategory = (productList, men, women, kids, bestsellers) => {

    const filteredCategoryList = [];

    if(men === false && women === false && kids === false && bestsellers === false) {
        return productList;
    }
    if(men === true) {
        let newList = productList.filter(item => item.category === "men");
        filteredCategoryList.push(...newList); 
    }
    if(women === true) {
        let newList = productList.filter(item => item.category === "women");
        filteredCategoryList.push(...newList); 
    }
    if(kids === true) {
        let newList = productList.filter(item => item.category === "kids");
        filteredCategoryList.push(...newList); 
    }
    if(bestsellers === true) {
        let newList = productList.filter(item => item.category === "bestsellers");
        filteredCategoryList.push(...newList); 
    }
    return filteredCategoryList;
}

const Products = () => {
    const {products, loader, error} = useProduct();
    const { state } = useFilter();

    const sortedList = sortData(products, state.sortBy);   //  function call for sortBY

    const filteredList = filterData(                         //  function call for filters
        sortedList,
        state.showInventory,
        state.fastDelivery
    );

    const { men, women, kids, bestsellers } = state.categories;

    const categoryList = sortByCategory(filteredList, men, women, kids, bestsellers);  // function call for category

    const finalList = sortRange(categoryList, state.rangeValue);      //  function call for Slider

    return (
        <main className="product_container">
            <div className="product_heading flex flex_justify_start flex_align_center">
                <h3>Showing All Products</h3>
                <p>(Showing 10 Products)</p>
            </div>
            
            <div className="product_list">
                {loader && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {finalList.map((item) => <ProductCard key={item._id} product={item} /> )}
            </div>
        </main>
    );
}

export {Products};