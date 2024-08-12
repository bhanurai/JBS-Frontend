import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductsApi } from "../../api/Apis";

const UserDashboard = () => {
  //to load all products
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllProductsApi().then((res) => {
      setProducts(res.data.products);
    });
  }, []);
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/images/1.png"
              alt="al"
              className="d-block w-100"
              style={{ maxWidth: "1520px", height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/2.png"
              alt="al"
              className="d-block w-100"
              style={{ maxWidth: "1520px", height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/sale.png"
              alt="al"
              className="d-block w-100"
              style={{ maxWidth: "1520px", height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/4.png"
              alt="al"
              className="d-block w-100"
              style={{ maxWidth: "1520px", height: "500px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="search-bar ms-5 ps-4 mb-4 w-50">
        <input
          type="text"
          className="form-control "
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="user-content">
        <div className="container">
          <h3 className="mb-3">All Products</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 gy-3">
            {filteredProducts.map((product) => (
              <div className="col mb-3" key={product._id}>
                <Link
                  to={`/user/productDetails/${product._id}`}
                  className="text-decoration-none"
                >
                  <div
                    className="card rounded d-flex flex-column"
                    style={{
                      height: "450px", // Fixed height for all cards
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    }}
                  >
                    <img
                      src={product.productImageUrl}
                      className="card-img-top"
                      alt={product.productName}
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.25rem",
                        borderTopRightRadius: "0.25rem",
                      }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5
                          className="card-title"
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {product.productName}
                        </h5>
                        <p className="card-text">
                          Price: NPR. {product.productPrice}
                        </p>
                        <p
                          className="card-text mb-3"
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "-webkit-box",
                            WebkitLineClamp: "3",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {product.productDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
