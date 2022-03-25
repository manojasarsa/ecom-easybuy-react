import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "men",
  },
  {
    _id: uuid(),
    category: "women",
  },
  {
    _id: uuid(),
    category: "kids",
  },
  {
    _id: uuid(),
    category: "bestSellers",
  },
];
