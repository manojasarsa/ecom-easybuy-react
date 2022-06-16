import { useState } from "react";
import { useAddress } from "../../contexts/addressContext";
import { AddressModal } from "../AddressModal/AddressModal";

const AddressCard = ({ address }) => {

    const [isAddressModal, setIsAddressModal] = useState(false);

    const { deleteAddress } = useAddress();

    const { name, street, state, country, zipCode, mobile } = address;

    return (
        <ul key={address._id} className="edit_list flex flex_col flex_justify_center flex_align_start">

            <li className="profile_details flex flex_row ">
                <span className="title_text">{name}</span>
            </li>

            <li className="profile_details flex flex_row flex_justify_between">
                <span className="title_text">{street}</span>
            </li>

            <li className="profile_details flex flex_row flex_justify_between">
                <span className="title_text">{state}</span>
            </li>

            <li className="profile_details flex flex_row flex_justify_between">
                <span className="title_text">{country}</span>
            </li>

            <li className="profile_details flex flex_row flex_justify_between">
                <span className="title_text">{zipCode}</span>
            </li>

            <li className="profile_details flex flex_row flex_justify_between">
                <span className="title_text">{mobile}</span>
            </li>
            <div className="flex address_btns">

                <i className="edit_icons fa-solid fa-pen-to-square"
                    onClick={() => setIsAddressModal(true)}>
                </i>

                <i className="edit_icons fa-solid fa-trash"
                    onClick={() => deleteAddress(address)}>
                </i>

            </div>

            {isAddressModal && <AddressModal initialAddress={address} isAddressModal={isAddressModal} setIsAddressModal={setIsAddressModal}
                isEditing={true} />}
        </ul>
    )
}

export { AddressCard };