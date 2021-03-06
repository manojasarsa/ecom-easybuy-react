import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Manoj",
    lastName: "Asarsa",
    email: "manojasarsa7611@gmail.com",
    password: "Manoj@8947",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    orders: [],
    address: [
        {
            _id: uuid(),
            name: "Manoj Asarsa",
            street: "256 / Rose View Colony, Mount Abu",
            state: "Rajasthan",
            country: "India",
            zipCode: "307501",
            mobile: "9897554001",
        },
    ]
  },
];
