import { useState } from "react";
import { useAddress } from "../../contexts/addressContext";
import "./addressmodal.css";

const defaultValue = {
    name: "",
    street: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
}

const AddressModal = ({ initialAddress = defaultValue, isAddressModal, setIsAddressModal, isEditing }) => {
    
    const [newAddress, setNewAddress] = useState(initialAddress);

    const { name, street, state, country, zipCode, mobile } = newAddress;

    const { addNewAddress, editAddress } = useAddress();

    const newAddressHandler = (e) => {
        if(name && street && state && country && zipCode && mobile) {
            e.preventDefault();
            if (isEditing) {
                editAddress(newAddress); 
                setNewAddress(newAddress); 
                setIsAddressModal((prev) => !prev);
            } else {
                addNewAddress(newAddress);
                setNewAddress(initialAddress); 
                setIsAddressModal((prev) => !prev);
            }
        }
    }

    const cancelModalHandler = (e) => {
        e.preventDefault();
        setIsAddressModal(false);
    }

    return (
        <div className="address_modal_wrapper flex flex_col flex_justify_center flex_align_center">
            <form className="address_form flex flex_col flex_justify_center flex_align_center">
                <label className="label flex flex_col flex_align_start">
                    <h4>Name<span className="red_star">*</span></h4>
                    <input 
                        defaultValue={name}
                        className="address_input"
                        required
                        onChange={(e) => 
                            setNewAddress({ ...newAddress, name: e.target.value })
                        }
                    />
                </label>
                <label className="label flex flex_col flex_align_start">
                    <h4>Street<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        required
                        defaultValue={street}
                        onChange={(e) =>
                            setNewAddress({ ...newAddress, street: e.target.value })
                        }
                    />
                </label>
                <label className="label flex flex_col flex_align_start">
                    <h4>State<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        required
                        defaultValue={state}
                        onChange={(e) =>
                            setNewAddress({ ...newAddress, state: e.target.value })
                        }
                    />
                </label>
                <label className="label flex flex_col flex_align_start">
                    <h4>Country<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        required
                        defaultValue={country}
                        onChange={(e) =>
                            setNewAddress({ ...newAddress, country: e.target.value })
                        }
                    />
                </label>
                <label className="label flex flex_col flex_align_start">
                    <h4>ZipCode<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        required
                        defaultValue={zipCode}
                        onChange={(e) =>
                            setNewAddress({ ...newAddress, zipCode: e.target.value })
                        }
                    />
                </label>
                <label className="label flex flex_col flex_align_start">
                    <h4>Mobile No.<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        required
                        defaultValue={mobile}
                        onChange={(e) =>
                            setNewAddress({ ...newAddress, mobile: e.target.value })
                        }
                    />
                </label>
                <div className="modal_btns_wrapper flex flex_justify_between">
                <button className="btn btn_primary_outline" onClick={(e) => cancelModalHandler(e)}>Cancel</button>
                <button className="btn btn_secondary" onClick={(e) => newAddressHandler(e)}>
                    {isEditing ? "Update" : "Save"}
                </button>
            </div>
            </form>
        </div>
    )
}

export { AddressModal };