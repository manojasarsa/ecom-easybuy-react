import "./auth.css";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts";

const SignUp = () => {

    const { signup } = useAuth();

    // const [pwdError, setPwdError] = useState("");
    // password === confirmPwd ? setPwdError("Welcome") : setPwdError("Password does not match!");

    const initialFormInputs = {
        firstName:"",
        lastName: "",
        email: "",
        password: "",
        confirmPwd: ""
    }

    const [ formInputs, setFormInputs ] = useState(initialFormInputs);
    const {firstName, lastName, email, password, confirmPwd} = formInputs;
    
    const formHandler = (e) => {
        // e.preventDefault();
        if(formInputs.password === formInputs.confirmPwd) {
            signup({firstName, lastName, email, password});
        } else{
            console.log("Password does not match!");
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
                            onChange={(e) => setFormInputs({...formInputs, firstName: e.target.value})}
                            name= "firstName"
                            value= {firstName}
                            className="input_box"
                            type="text" 
                            required={true} 
                        />
                    </label>

                    <label className="input_label">Last Name<span className="form_label">*</span>
                        <input 
                            onChange={(e) => setFormInputs({...formInputs, lastName: e.target.value})} 
                            name="lastName"
                            value= {lastName} 
                            className="input_box" 
                            type="text" 
                            required={true} 
                        />
                    </label>

                    <label className="input_label">Email<span className="form_label">*</span>
                        <input 
                            onChange={(e) => setFormInputs({...formInputs, email: e.target.value})} 
                            name="email"
                            value= {email} 
                            className="input_box" 
                            type="email" 
                            required={true} 
                        />
                    </label>

                    <label className="input_label">Password<span className="form_label">*</span>
                        <input 
                            onChange={(e) => setFormInputs({...formInputs, password: e.target.value})} 
                            name="password"
                            value= {password} 
                            className="input_box" 
                            type="password" 
                            required={true} 
                        />
                    </label>

                    <label className="input_label">Confirm Password<span className="form_label">*</span>
                        <input 
                            onChange={(e) => setFormInputs({...formInputs, confirmPwd: e.target.value})} 
                            name="confirmPwd"
                            value= {confirmPwd} 
                            className="input_box" 
                            type="password"
                            required={true} 
                        />
                    </label>

                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <input type="checkbox" className="input_checkbox" /> 
                        <p className="checkbox_notify">I accept all Terms & Conditions</p>
                    </div>

                    {/* <button onClick={(e) => formHandler(e)} className="btn btn_secondary" >SignUp</button> */}

                    <Link onClick={(e) => formHandler(e)} className="route_link btn btn_secondary" to="/signup">Create New Account</Link>

                    <p className="input_subheading"><Link id="input_subheading" to="/login">Already have an account  </Link></p>

                </form>    
            </div>
        </>
    );
}

export {SignUp};