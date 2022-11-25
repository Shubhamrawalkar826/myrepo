import React, { useState } from "react";
import { Nav } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import CustomerregistrationAPI from "../services/CustomerregistrationAPI";


const Customerregistration = () => {

    const [userdetails, setUserdetails] = useState({
        email: '',
        password_confirmation: '',
        password: '',
        name: ''
    });
    const [message, setMessage] = useState('');

    const onChange = event => {
        setUserdetails({
            ...userdetails,
            [event.target.name]: event.target.value
        });
    };

    const validatePassword = () => {
        let password = document.getElementById("pwd").value;
        var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;;

        if (regexPassword.test(password) === true) {
            document.getElementById("passwordVr").innerHTML = "";
        } else {
            document.getElementById("passwordVr").innerHTML = "password must be alphanumeric and should contains at least a special character with length 5"
        }

    }

    const validateEmail = () => {
        let email = document.getElementById("email").value;
        var regexEmail = /\S+@\S+\.\S+/;
        if (regexEmail.test(email) === true) {
            document.getElementById("emailVr").innerHTML = "";
        } else {
            document.getElementById("emailVr").innerHTML = "email format should be 'abc@gmail.com'"

        }

    }
    const removeWarnings = () => {
        document.getElementById("passwordVr").innerHTML = "";
        document.getElementById("emailVr").innerHTML = "";
        document.getElementById("mobileNumberVr").innerHTML = "";

    }

   

    const customerreg = e => {

        e.preventDefault();
        let user = {
            email: userdetails.email,
            password: userdetails.password,
            name: userdetails.name,
        };

        var regexEmail = /\S+@\S+\.\S+/;
        if (userdetails.email === '' || regexEmail.test(userdetails.email) !== true) {
            toast.error("Please enter valid email", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;;
        if (userdetails.password === '' || regexPassword.test(userdetails.password) !== true) {
            toast.error("Please enter valid password", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        if (userdetails.password !== userdetails.password_confirmation) {
            toast.error("Password mismatch", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        if (userdetails.name === '') {
            toast.error("Please enter first name", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        
        

        CustomerregistrationAPI.custreg(user).then(() => {
            setUserdetails({
                ...userdetails,
                //message: 'registration successful.',

                email: '',
                password: '',
                password_confirmation: '',
                name: ''
            });
            setMessage('Registration successful.');
            console.log(user);
            toast.success('Registration successful.');

        }).catch(error => {
            setMessage('Registration failed.');
            toast.error('Registration failed.', { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
            //err.response.data => DTO on the server side : ErrorResponse
            console.log(error);
        });
    }

    return (
        <div>
            <div className="container overflow-hidden mb-2" style={{ minHeight: "100vh" }}>
                <div className="row mt-3">
                    <div className="col-sm-8">
                    </div>
                    <div className="col-sm-4">
                        <Nav.Link as={Link} to='/'><h6 className='btn btn-secondary text-uppercase offset-8'>Go Back</h6></Nav.Link>
                    </div>
                </div>
                <form className="container rounded bg-light py-2 mb-5" style={{ width: "80vh" }}>
                    <h5>Sign Up</h5>

                    <div className="form-group pt-2">
                        <div>
                            <input type="email" id="email" className="form-control" placeholder="Enter Email Address" name="email" value={userdetails.email} onChange={onChange} onFocus={removeWarnings} onBlur={validateEmail} /><span style={{ color: 'red' }} id='emailVr'></span>
                        </div>
                    </div>
                    <div className="form-group pt-2">
                        <div>
                            <input type="password" id="pwd" className="form-control" placeholder="Enter Password" name="password" value={userdetails.password} onChange={onChange} onBlur={validatePassword} onFocus={removeWarnings} /><span style={{ color: 'red' }} id='passwordVr'></span>

                        </div>
                    </div>
                    <div className="form-group pt-2">
                        <div>
                            <input type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" value={userdetails.password_confirmation} onChange={onChange} required />

                        </div>
                    </div>
                    <div className="form-group pt-2">
                        <div>
                            <input type="text" id="firstName" className="form-control" placeholder="Enter your name" name="name" value={userdetails.name} onChange={onChange} required />
                        </div>
                    </div>
                   
                    <div className="form-group py-2">
                        <h4 className="display-flex">{message}</h4>
                        <div >
                            <button className="btn btn-lg btn-success text-uppercase mt-3" onClick={customerreg}>Sign Up</button>
                        </div>

                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Customerregistration



