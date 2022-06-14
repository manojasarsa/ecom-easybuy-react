import "./addressmodal.css";

const AddressModal = ({address, setAddress, setIsAddressModal}) => {

    return (
        <div className="address_modal_wrapper flex flex_col flex_justify_center flex_align_center">
            <form className="address_form flex flex_col flex_justify_center flex_align_center">
                <label className="label flex flex_col flex_align_start">
                    <h4>Name<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        onChange={(e) => setAddress({ ...address, name: e.target.value })}
                    />
                </label>
                <label className="label flex flex_col flex_align_start">
                    <h4>Address<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        onChange={(e) =>
                            setAddress({ ...address, fullAddress: e.target.value })
                        }
                    />
                </label>
                <label className="label flex flex_col flex_align_start">
                    <h4>Pincode<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        onChange={(e) =>
                            setAddress({ ...address, pincode: e.target.value })
                        }
                    />
                </label>
                <label className="label flex flex_col flex_align_start">
                    <h4>Mobile No.<span className="red_star">*</span></h4>
                    <input 
                        className="address_input"
                        onChange={(e) =>
                            setAddress({ ...address, mobileNo: e.target.value })
                        }
                    />
                </label>
            </form>
            <button onClick={() => setIsAddressModal(prev => !prev)}>SAVE</button>
        </div>
    )
}

export { AddressModal };