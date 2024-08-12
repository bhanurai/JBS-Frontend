import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createProductApi,
  deleteProductApi,
  getAllProductsApi,
} from "../../api/Apis";

const AdminDashboard = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsApi().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productDescription", productDescription);
    formData.append("productCategory", productCategory);
    formData.append("productImage", productImage);

    createProductApi(formData)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          document.getElementById("exampleModal").click();
          getAllProductsApi().then((res) => {
            setProducts(res.data.products);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error!");
      });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      deleteProductApi(id).then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          window.location.reload();
        }
      });
    }
  };

  return (
    <div
      className="container mt-4"
      style={{
        backgroundColor: "orchid",
        minHeight: "100vh",
        minWidth: "193vh",
        color: "teal",
      }}
    >
      <div className="d-flex justify-content-between mb-4">
        <h1>Admin Dashboard</h1>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create a New Product!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label>Dress Name</label>
              <input
                onChange={(e) => setProductName(e.target.value)}
                className="form-control mb-2"
                type="text"
                name=""
                id=""
                placeholder="Enter product name"
              />
              <label htmlFor="">Dress Description</label>
              <textarea
                onChange={(e) => setProductDescription(e.target.value)}
                className="form-control mb-2"
                placeholder={"Enter description"}
                cols="4"
                rows="4"
              ></textarea>
              <label htmlFor="">Price</label>
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                type="number"
                className="form-control mb-2"
                placeholder="Enter your price"
              />
              <label htmlFor="">Select category</label>
              <select
                onChange={(e) => setProductCategory(e.target.value)}
                className="form-select mb-2"
              >
                <option selected>Open the select menu</option>
                <option value="Saree">Saree</option>
                <option value="Kurti">Kurti</option>
                <option value="Full Set">Full Set</option>
                <option value="Party Wear">Party Wear</option>
                <option value="Blouse">Blouse</option>
              </select>
              <label>Dress Image</label>
              <input
                onChange={handleImageUpload}
                type="file"
                className="form-control"
              />
              {/* Preview Image */}
              {previewImage && (
                <img
                  src={previewImage}
                  className="img-fluid rounded object-cover mt-2"
                  height={100}
                  width={100}
                />
              )}{" "}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Exit
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-success"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th scope="col">Dress Image</th>
            <th scope="col">Dress Name</th>
            <th scope="col">Dress Price</th>
            <th scope="col">Dress Category</th>
            <th scope="col">Dress Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.productImageUrl}
                  alt={item.productName}
                  height={50}
                  width={70}
                  className="img-fluid img-thumbnail"
                />
              </td>
              <td>{item.productName}</td>
              <td>Rs.{item.productPrice}</td>
              <td>{item.productCategory}</td>
              <td>{item.productDescription.slice(0, 20)}</td>
              <td>
                <div className="d-flex">
                  <Link
                    to={`/admin/edit/${item._id}`}
                    className="btn btn-outline-success me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
