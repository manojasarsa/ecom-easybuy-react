import "./auth.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts";
import { toastHandler } from "../../utils/toastHandler";

const SignUp = () => {

    const [showHideOne, setShowHideOne] = useState(false);
    const [showHideTwo, setShowHideTwo] = useState(false);
    const [error, setError] = useState("");
    const [errorState, setErrorState] = useState(false);
    const [termsAndCondition, setTermsAndCondition] = useState(false);

    const signUpInputs = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPwd: ""
    }

    const [formInputs, setFormInputs] = useState(signUpInputs);

    const { signup } = useAuth();

    const { firstName, lastName, email, password, confirmPwd } = formInputs;

    const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const toggleTermsCondition = () => termsAndCondition ? setTermsAndCondition(false) : setTermsAndCondition(true);

    const submitFormHandler = (e) => {

        e.preventDefault();

        if (firstName && lastName && email && password && confirmPwd && termsAndCondition) {

            if (password.length < 8) {
                setError("Password must be at least 8 characters");

            } else if (!regex.test(password)) {         // test() search a match bw regex & pwd
                setError("Required 1 Uppercase, 1 Lowercase letter, 1 Special character, and 1 number");

            } else {
                if (formInputs.password === formInputs.confirmPwd) {
                    signup({ firstName, lastName, email, password, setError, setErrorState });
                    setError("Account created!");
                    toastHandler(setErrorState);
                }
                else {
                    setError("Password does not match!");
                }
            }
            toastHandler(setErrorState);
        } else {
            setError("All fields are required!");
            toastHandler(setErrorState);
        }
    }

    return (
        <>
            <Header />
            <div className="input_container flex flex_col" id="auth_container">
                <form className="input_field flex flex_col">

                    <h2 className="input_heading">Signup</h2>

                    <label className="input_label">First Name<span className="form_label">*</span>
                        <input
                            onChange={(e) => setFormInputs({ ...formInputs, firstName: e.target.value })}
                            name="firstName"
                            value={firstName}
                            className="input_box"
                            type="text"
                            required={true}
                        />
                    </label>

                    <label className="input_label">Last Name<span className="form_label">*</span>
                        <input
                            onChange={(e) => setFormInputs({ ...formInputs, lastName: e.target.value })}
                            name="lastName"
                            value={lastName}
                            className="input_box"
                            type="text"
                            required={true}
                        />
                    </label>

                    <label className="input_label">Email<span className="form_label">*</span>
                        <input
                            onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
                            name="email"
                            value={email}
                            className="input_box"
                            type="email"
                            required={true}
                        />
                    </label>

                    <label className="input_label">Password<span className="form_label">*</span>
                        <input
                            onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                            name="password"
                            value={password}
                            className="input_box"
                            type={showHideOne ? "text" : "password"}
                            required={true}
                        />

                        <i className="fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHideOne((prev) => !prev)}>
                        </i>

                    </label>

                    <label className="input_label">Confirm Password<span className="form_label">*</span>
                        <input
                            onChange={(e) => setFormInputs({ ...formInputs, confirmPwd: e.target.value })}
                            name="confirmPwd"
                            value={confirmPwd}
                            className="input_box"
                            type={showHideTwo ? "text" : "password"}
                            required={true}
                        />

                        <i className="fa-solid fa-eye show_hide_btn"
                            onClick={() => setShowHideTwo((prev) => !prev)}>
                        </i>

                    </label>

                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <input
                            onClick={toggleTermsCondition}
                            type="checkbox"
                            className="input_checkbox"
                            required={true}
                        />
                        <p className="checkbox_notify">I accept all Terms & Conditions</p>
                    </div>

                    <button
                        onClick={(e) => submitFormHandler(e)}
                        className="btn btn_secondary"
                    >
                        Create New Account
                    </button>

                    <p
                        className="input_subheading">
                        <Link
                            id="input_subheading"
                            to="/login">
                            Already have an account {">"}
                        </Link>
                    </p>

                </form>

                {errorState &&
                    <div
                        className="toast flex flex_justify_center flex_align_center toast_active_leading toast_position">
                        <span>
                            {error}
                        </span>
                    </div>
                }

            </div>
        </>
    )
};

export { SignUp };