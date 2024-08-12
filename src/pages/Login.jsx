import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";
import { loginApi } from "../api/Apis";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const changeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };
    // api call
    loginApi(data)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          // set token and user data in local storage
          localStorage.setItem("token", res.data.token);

          // Check if user is admin
          const isAdmin = res.data.isAdmin;

          // Redirect based on admin status
          if (isAdmin) {
            // Redirect to admin dashboard
            navigate("/admin/dashboard");
          } else {
            // Redirect to user dashboard
            navigate("/user/dashboard");
          }

          // Converting incomming json
          const convertedJson = JSON.stringify(res.data.userData);
          localStorage.setItem("user", convertedJson);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server Error!");
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center mb-4">Sign in to your account</h1>
              <form>
                {/* email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={changeEmail}
                    type="email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="Email"
                    required
                  />
                  {emailError && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>

                {/* password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={changePassword}
                    type="password"
                    className={`form-control ${
                      passwordError ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="Password"
                    required
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>

                {/* Additional features */}
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>

                <div className="mb-3">
                  <a href="/sendemail">Forgot Password?</a>
                </div>

                {/* Social Media Login */}
                <div className="mb-3">
                  <p className="text-center">Or sign in with:</p>
                  <div className="d-grid gap-2">
                    {/* <button className="btn btn-primary" type="button">
                      Google
                    </button>
                    <button className="btn btn-primary" type="button">
                      Facebook
                    </button> */}
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div>New user? </div>
                  <a href="/register" className="text-dark">
                    {" "}
                    Register
                  </a>
                </div>

                {/* Login button */}
                <div className="mb-3"></div>
                <button
                  onClick={handleSubmit}
                  className="btn btn-success w-100"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
