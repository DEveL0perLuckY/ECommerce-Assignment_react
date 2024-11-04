import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addProduct } from '../services/Connection';


function ProductListingPage() {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);

  const onSubmit = async (data) => {
    const newProduct = await addProduct(data);
    if (newProduct) {
      setProducts([...products, newProduct]);
      reset();
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Product Listing Page</h1>

      <div className="card p-4 mb-5">
        <h4>Add a New Product</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              {...register('name', { required: true })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              {...register('description', { required: true })}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              step="0.01"
              {...register('price', { required: true })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              {...register('category', { required: true })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Stock</label>
            <input
              type="number"
              className="form-control"
              {...register('stock', { required: true })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://loremflickr.com/640/480"
                className="card-img-top"
                alt="Product"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text text-muted">${product.price}</p>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <strong>Stock:</strong> {product.stock}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
