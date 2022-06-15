import "./profile.css";
import { AddressCard, AddressModal, Header } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAddress } from "../../contexts/addressContext";

const UserAddress = () => {

    const [isAddressModal, setIsAddressModal] = useState(false);

    const { addressState: { address } } = useAddress();

    return (
        <div className="main_profile_wrapper flex">
            <Header />

            {isAddressModal && <AddressModal isAddressModal={isAddressModal} setIsAddressModal={setIsAddressModal} />}

            <div className="user_profile_main flex flex_col">

                <div className="details_box">
                    <h2 className="account_head">User Profile</h2>

                    <div className="profile_container flex flex_row">

                        <div className="quick_links">

                            <ul className="menu flex flex_col flex_justify_center flex_align_start">
                                <Link className="menu_link" to="/user/profile">
                                    <li className="profile_navigate">Profile</li>
                                </Link>
                                <Link className="menu_link" to="/user/address">
                                    <li className="profile_navigate">Address Management</li>
                                </Link>
                                <Link className="menu_link" to="/user/orders">
                                    <li className="profile_navigate">Order Summary</li>
                                </Link>
                            </ul>

                        </div>

                        <div className="profile_edit flex flex_col">

                            <h2 className="lines">My Addresses</h2>

                            <button
                                className="btn btn_secondary_outline"
                                onClick={() => setIsAddressModal(true)}>
                                + Add New Address
                            </button>
                            
                            {address.map((addr) =>
                                <AddressCard key={addr._id} address={addr} />
                            )}

                            {!address.length && <h4>No Address Available</h4>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { UserAddress };