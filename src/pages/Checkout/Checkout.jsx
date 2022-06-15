import "./checkout.css";
import { AddressCard, AddressModal, Header } from "../../components";
import { useAddress } from "../../contexts/addressContext";
import { useState } from "react";

const Checkout = () => {

    const [isAddressModal, setIsAddressModal] = useState(false);

    const { addressState: { address } } = useAddress();

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

                                <div className="input_address_btn">
                                    <input type="radio" id="addr._id" name="address" value="addr" />
                                    <label className="flex flex_col address_label" for="addr">
                                        <span>{addr.name}</span>
                                        <span>{addr.street}</span>
                                        <span>{addr.city}</span>
                                        <span>{addr.country}</span>
                                        <span>{addr.zipCode}</span>
                                        <span>{addr.mobile}</span>
                                    </label>
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

                        </div>
                    </section>

                </div>
            </main>
        </div>
    )
};

export { Checkout };