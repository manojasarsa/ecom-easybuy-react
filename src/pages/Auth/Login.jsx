import "./auth.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts";

const Login = () => {

    const { login } = useAuth();

    const loginInputs = {
        email: "",
        password: ""
    }

    const [ formInputs, setFormInputs ] = useState(loginInputs);
    const [error, setError] = useState("");
    const [errorState, setErrorState] = useState(false);

    const { email, password } = formInputs;

    const formHandler = (e) => {
        e.preventDefault();
        login({email, password, setError, setErrorState});   
    }

    return (
        <>
            <Header />

            <div className="input_container flex flex_col" id="auth_container">
                
                <form className="input_field flex flex_col">

                    <h2 className="input_heading">Login</h2>

                    <label className="input_label">Email address<span className="form_label">*</span>
                        <input 
                            name="email"
                            value={email}
                            className="input_box" 
                            type="email" 
                            required={true} 
                            onChange={(e) => setFormInputs({...formInputs, email: e.target.value})}
                        />
                    </label>

                    <label className="input_label">Password<span className="form_label">*</span>
                        <input 
                            name="password"
                            value={password}
                            className="input_box" 
                            type="password" 
                            required= {true} 
                            onChange={(e) => setFormInputs({...formInputs, password: e.target.value})}
                        />
                    </label>

                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <input 
                            type="checkbox" 
                            className="input_checkbox"
                        /> 
                        <p className="checkbox_notify">Remember me</p>
                    </div>

                    <p className="input_subheading"><Link id="input_subheading" to="/forgotpwd">Forgot your Password?</Link> </p>

                    <button className=" btn btn_secondary" onClick={(e) => formHandler(e)} >Login</button>

                    <p className="input_subheading"><Link id="input_subheading" to="/signup">Create New Account</Link> </p>

                </form>
            </div>

            {errorState && <div class="alert_error toast flex flex_justify_center flex_align_center toast_box toast_active_leading toast_position">
                <span> {error} </span>
            </div> }
        </>
    );
}

export {Login};