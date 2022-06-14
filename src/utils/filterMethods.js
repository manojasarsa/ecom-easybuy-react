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
    productList.filter((item) => item.price <= rangeValue);

const sortByCategory = (productList, men, women, boys, girls) => {

    const filteredCategoryList = [];

    if(men === false && women === false && boys === false && girls === false) {
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
    if(boys === true) {
        let newList = productList.filter(item => item.category === "boys");
        filteredCategoryList.push(...newList); 
    }
    if(girls === true) {
        let newList = productList.filter(item => item.category === "girls");
        filteredCategoryList.push(...newList); 
    }
    return filteredCategoryList;
}

const sortRating = (productList, ratings) =>
    ratings === "4 Stars & above"
    ? productList.filter(item => item.rating >= 4)
    : ratings === "3 Stars & above"
    ? productList.filter(item => item.rating >= 3)
    : ratings === "2 Stars & above" 
    ? productList.filter(item => item.rating >= 3)
    : ratings === "1 Stars & above"
    ? productList.filter(item => item.rating >= 1)
    : productList;

const searchByName = (listData, searchQuery) =>
    listData.filter((product) =>
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
);

export { filterData, sortData, sortRange, sortByCategory, sortRating, searchByName };