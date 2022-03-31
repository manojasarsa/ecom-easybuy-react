export const filterData = (productList, showInventory, fastDelivery) =>
  productList
    .filter((item) => (showInventory ? true : item.inStock))
    .filter((product) => (fastDelivery ? product.fastDelivery : true));

export const sortData = (productList, sortBy) =>
    sortBy === "LOW_TO_HIGH"
    ? [...productList].sort((a, b) => a.discountedPrice - b.discountedPrice)
    : sortBy === "HIGH_TO_LOW"
    ? [...productList].sort((a, b) => b.discountedPrice - a.discountedPrice)
    : productList;

export const sortRange = (productList, rangeValue) =>
    productList.filter((item) => item.discountedPrice <= rangeValue);

export const sortByCategory = (productList, men, women, boys, girls) => {

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

export const sortRating = (productList, ratings) =>
    ratings === "4 Stars & above"
    ? productList.filter(item => item.rating >= 4)
    : ratings === "3 Stars & above"
    ? productList.filter(item => item.rating >= 3)
    : ratings === "2 Stars & above" 
    ? productList.filter(item => item.rating >= 3)
    : ratings === "1 Stars & above"
    ? productList.filter(item => item.rating >= 1)
    : productList;