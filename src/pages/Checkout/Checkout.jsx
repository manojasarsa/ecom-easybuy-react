import "./checkout.css";
import { AddressCard, AddressModal, Header, PriceBox } from "../../components";
import { useAddress } from "../../contexts/addressContext";
import { useState } from "react";
import { useCart } from "../../contexts";

const Checkout = () => {

    const [isAddressModal, setIsAddressModal] = useState(false);
    const { addressState: { address } } = useAddress();
    const { cartState } = useCart();
    const [deliveryAddressId, setDeliveryAddressId] = useState(address[0]?._id);

    const deliveryAddress = address.find(addr => addr._id === deliveryAddressId);

    const cartCounter = cartState.cartItems.length;

    return (
        <div>
            <Header />

            {isAddressModal && <AddressModal isAddressModal={isAddressModal} setIsAddressModal={setIsAddressModal} />}

            <main className="flex flex_col checkout_wrapper">
                <header className="checkout_header">Checkout</header>

                <div className="section_wrapper flex">

                    <section className="address_section">
                        <h3 className="checkout_heading">Contact and Delivery Address</h3>
                        <div className="address_wrapper">

                            {address.map(addr =>

                                <div key={addr._id} className="input_address_btn">
                                    <input 
                                        type="radio" 
                                        checked={deliveryAddressId === addr._id}
                                        onChange={() => setDeliveryAddressId(addr._id)}
                                    />
                                    <address className="flex flex_col address_label">
                                        <h4>{addr.name}</h4>
                                        <span>{addr.street}</span>
                                        <span>{addr.city}</span>
                                        <span>{addr.country}</span>
                                        <span>{addr.zipCode}</span>
                                        <span>{addr.mobile}</span>
                                    </address>
                                </div>

                            )}

                            {!address.length && <h4>No Address Available</h4>}

                            <button
                                className="btn btn_secondary_outline"
                                onClick={() => setIsAddressModal(true)}>
                                + Add New Address
                            </button>
                        </div>
                    </section>

                    <section className="items_section">
                        <h3 className="checkout_heading">Items Overview</h3>
                        <div className="">
                            {cartCounter !== 0 &&
                                <PriceBox
                                    deliveryAddress={deliveryAddress}
                                />
                            }
                        </div>
                    </section>

                </div>
            </main>
        </div>
    )
};

export { Checkout };