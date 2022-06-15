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
                            {address.map(addr => <AddressCard key={addr._id} address={addr} /> )}
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