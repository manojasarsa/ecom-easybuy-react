import "./profile.css";
import { Header } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { useState } from "react";
import { AddressModal } from "../../components/AddressModal/AddressModal";

const UserAddress = () => {

    const [address, setAddress] = useState({
        name: "",
        fullAddress: "",
        pincode: "",
        mobileNo: ""
    });

    const [isAddressModal, setIsAddressModal] = useState(false);

    const { name, fullAddress, pincode, mobileNo } = address;

    const { customer: { fname, lname }, logout } = useAuth();

    const navigate = useNavigate();

    return (
        <div className="main_profile_wrapper flex">
            <Header />

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
                                onClick={() => setIsAddressModal((prev) => !prev)}>
                                + Add New Address
                            </button>
                            
                            <ul className="edit_list flex flex_col flex_justify_center flex_align_start">

                                <li className="profile_details flex flex_row ">
                                    <span className="title_text">{name}</span>
                                </li>

                                <li className="profile_details flex flex_row flex_justify_between">
                                    <span className="title_text">{fullAddress}</span>
                                </li>

                                <li className="profile_details flex flex_row flex_justify_between">
                                    <span className="title_text">{pincode}</span>
                                </li>

                                <li className="profile_details flex flex_row flex_justify_between">
                                    <span className="title_text">{mobileNo}</span>
                                </li>
                                {isAddressModal && <AddressModal address={address} setAddress={setAddress} setIsAddressModal={setIsAddressModal} />}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { UserAddress };