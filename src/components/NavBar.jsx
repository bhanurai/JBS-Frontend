import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // get user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  //Logout function
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "mediumorchid  " }}
      >
        <div
          className="container-fluid"
          style={{ backgroundColor: "mediumorchid  " }}
        >
          <a className="navbar-brand text-warning fw-bold fs-3" href="#">
            JBS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/user/dashboard"
              >
                Home
              </Link>
            </div>

            <div className="nav-item">
              <Link className="nav-link" to="/user/cart">
                Cart
              </Link>
            </div>

            <div className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/user/favorites">
                Favourite
              </Link>
            </div>
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Saree
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Kurti
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Full Set
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Blouse
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Party Wear
                  </Link>
                </li>
              </ul>
            </div>
            <form className="d-flex gap-2" role="search">
              {user ? (
                <>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Welcome, {user.firstName}!
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/user/Profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/resetpassword">
                          Change password
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleLogout} class="dropdown-item">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <button className="btn btn-outline-danger" type="submit">
                    Login
                  </button>
                  <button className="btn btn-outline-success" type="submit">
                    Register
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
