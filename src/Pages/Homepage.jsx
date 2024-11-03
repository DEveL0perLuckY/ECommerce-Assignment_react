import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/Connection';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    async function getProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    getProducts();
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">

      <div class="jumbotron m-5">
        <h1 class="display-4">Welcome to Our E-Commerce Store!</h1>
        <p class="lead">Explore our exclusive collection of products and shop your favorites.</p>
      </div>
      <h1 className="my-4">Product List</h1>

      {/* Card layout */}
      <div className="row">
        {currentProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                <p className="card-text"><strong>Category:</strong> {product.category}</p>
                <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => navigate(`/checkout/${product.id}`)} 
                >
                  Buy Now
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map((number) => (
            <li key={number + 1} className={`page-item ${number + 1 === currentPage ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(number + 1)}>
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Homepage;
