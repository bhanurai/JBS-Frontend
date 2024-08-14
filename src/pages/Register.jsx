


import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerApi } from "../api/Apis";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const changeFirstName = (e) => setFirstName(e.target.value);
    const changeLastName = (e) => setLastName(e.target.value);
    const changeEmail = (e) => {
        const emailVal = e.target.value;
        setEmail(emailVal);
        setEmailError(emailRegex.test(emailVal) ? "" : "Invalid email format.");
    };
    const changePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        updatePasswordStrength(value);
    };
    const changeConfirmPassword = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setPasswordError(password && value !== password ? "Passwords do not match!" : "");
    };

    const updatePasswordStrength = (password) => {
        const minLength = 8;
        const maxLength = 12;
        const complexityRequirement = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])/;
        if (password.length < minLength) {
            setPasswordStrength("Weak");
            setPasswordError("Password is too short. Minimum length is 8 characters.");
        } else if (!complexityRequirement.test(password)) {
            setPasswordStrength("Weak");
            setPasswordError("Password must include uppercase, lowercase, numbers, and special characters.");
        } else if (password.length > minLength && password.length < maxLength && complexityRequirement.test(password)) {
            setPasswordStrength("Medium");
            setPasswordError("");
        } else if (password.length >= maxLength && complexityRequirement.test(password)) {
            setPasswordStrength("Strong");
            setPasswordError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailError || passwordError || !email || !password || !confirmPassword || !firstName || !lastName) {
            toast.error("Please resolve all errors before submitting.");
            return;
        }

        registerApi({
            firstName, lastName, email, password, confirmPassword
        }).then((res) => {
            toast[res.data.success ? 'success' : 'error'](res.data.message);
        }).catch((err) => {
            console.error(err);
            toast.error("Internal Server Error!");
        });
    };

    return (
        <section className="vh-100 m-5">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration Form</p>
                                        <form className="mx-1 mx-md-4">
                                            {/* First Name */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter your firstname" value={firstName} onChange={changeFirstName}
                              style={{width:"140%"}}
                            />
                                                </div>
                                            </div>
                                            {/* Last Name */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" placeholder="Enter your lastname" value={lastName} onChange={changeLastName}style={{width:"140%"}} />
                                                </div>
                                            </div>
                                            {/* Email */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Your Email</label>
                                                    <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={changeEmail} style={{width:"140%"}} />
                                                    <div className="text-danger">{emailError}</div>
                                                </div>
                                            </div>
                                            {/* Password */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={changePassword}style={{width:"140%"}} />
                                                    <div className="password-indicator" style={{ display: 'flex', marginTop: '8px', height: '7px', borderRadius: '8px', overflow: 'hidden' }}>
    <div style={{ width: '33%', backgroundColor: passwordStrength === 'Weak' ? 'red' : '#e0e0e0', marginRight: '1%' }}></div>
    <div style={{ width: '33%', backgroundColor: passwordStrength === 'Medium' ? 'yellow' : '#e0e0e0', marginRight: '1%' }}></div>
    <div style={{ width: '33%', backgroundColor: passwordStrength === 'Strong' ? 'green' : '#e0e0e0' }}></div>
</div>

                                                    <div className="text-danger">{passwordError}</div>
                                                </div>
                                            </div>
                                            {/* Confirm Password */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill">
                                                    <label className="form-label">Confirm Password</label>
                                                    <input type="password" className="form-control" placeholder="Confirm your password" value={confirmPassword} onChange={changeConfirmPassword}style={{width:"140%"}} />
                                                    <div className="text-danger">{passwordError}</div>
                                                </div>
                                            </div>
                                            {/* Submit Button */}
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button onClick={handleSubmit} className="btn btn-primary btn-lg">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="assets/images/cover.jpeg" className="img-fluid" alt="Sample image" style={{height:"70%", marginLeft:"100px", marginBottom:"50px"}} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div>Already have an account?</div><a href="/login" className="text-dark"> Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;



