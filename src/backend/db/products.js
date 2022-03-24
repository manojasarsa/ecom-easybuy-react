import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "U.S. Polo Assn.",
    description: "U S Polo Assn Men Green Gold-Toned Brand Logo Printed Polo Collar Applique Slim Fit Pure Cotton T-shirt",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14632916/2021/7/5/58641bdf-509e-486c-b5b6-04d2b7da57341625470492157-US-Polo-Assn-Men-Tshirts-3211625470491687-1.jpg",
    price: 4000,
    discountedPrice: 1999,
    category: "men",
    rating: 4,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Roadster",
    description: "Women Dusty Pink Cotton Printed Detail Round Neck T-shirt",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13601542/2021/4/28/92ac59d7-1c94-4fa9-8a84-bfaacc3c414e1619586566085TshirtsMetronautMenTshirtsRoadsterMenTshirtsRoadsterMenTopsR1.jpg",
    price: 1900,
    discountedPrice: 999,
    category: "women",
    rating: 4,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "H&M",
    description: "Boys Navy Blue Cotton Jersey T-shirt",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17268416/2022/2/24/82b027d2-d27d-4dd7-ba7f-a462fd2f200e1645695087696CottonjerseyT-shirt1.jpg",
    price: 1299,
    discountedPrice: 599,
    category: "kids",
    rating: 3,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Puma",
    description: "Boys Beige & Brown 2-pack ",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17124260/2022/2/10/5cad0fa3-8223-4707-bb1f-eb72b1360ad716445016680612-packjerseytops1.jpg",
    price: 1200,
    discountedPrice: 399,
    category: "kids",
    rating: 2,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Pepe Jeans",
    description: "Girls Pink Printed T-shirt",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17464922/2022/3/10/c6a73cb2-0ba4-4fdd-8fb5-c41d08fcd7b41646917282995PrintedT-shirt1.jpg",
    price: 5000,
    discountedPrice: 3999,
    category: "bestsellers",
    rating: 5,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "ADIDAS",
    description: "Men Red & White Printed Football Manchester United 21/22 MUFC A JSY Jersey T-shirt",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14790112/2021/8/9/e6400d90-3bcb-4e3c-aaa4-a581a88cc2b11628494509668-ADIDAS-Men-Tshirts-6861628494509162-1.jpg",
    price: 6550,
    discountedPrice: 4999,
    category: "men",
    rating: 4,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Versace",
    description: "Men Green & Orange Colourblocked Hooded Sweatshirt",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15118956/2021/10/6/31ed72ac-7d3a-4c88-8084-837c90c44a111633503992669-Puma-Men-Sweatshirts-7221633503992197-1.jpg",
    price: 2999,
    discountedPrice: 1800,
    category: "men",
    rating: 3,
    inStock: false,
    fastDelivery: false,
  },
];
