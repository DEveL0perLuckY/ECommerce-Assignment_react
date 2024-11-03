import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductById } from '../services/Connection';

function CheckoutPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isPaymentInfoEntered, setIsPaymentInfoEntered] = useState(false);
  const [product, setProduct] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: ''
  });

  // Fetch product details by ID
  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductById(productId);
      setProduct(fetchedProduct);
    };
    getProduct();
  }, [productId]);

  // Handle form submission
  const handlePayment = (e) => {
    e.preventDefault();
    setIsPaymentInfoEntered(true);
    setTimeout(() => navigate('/payment'), 5000);
  };

  return (
    <div className="container">
      <h1 className="my-4">Checkout Page</h1>
      <p>You are buying the product with ID: {productId}</p>

      {product ? (
        <div>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <p>Stock: {product.stock} items available</p>
          <p>Rating: {product.rating} ({product.reviewsCount} reviews)</p>
          <img src={product.imageUrl} alt={product.name} style={{ width: '200px' }} />
          
          {!isPaymentInfoEntered ? (
            <form onSubmit={handlePayment} className="mt-4">
              <h4>Enter Payment Details</h4>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  className="form-control"
                  value={cardDetails.cardNumber}
                  onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardHolder" className="form-label">Card Holder Name</label>
                <input
                  type="text"
                  id="cardHolder"
                  className="form-control"
                  value={cardDetails.cardHolder}
                  onChange={(e) => setCardDetails({ ...cardDetails, cardHolder: e.target.value })}
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="expiry" className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    id="expiry"
                    className="form-control"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input
                    type="password"
                    id="cvv"
                    className="form-control"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">Proceed to Payment</button>
            </form>
          ) : (
            <p className="text-success mt-4">Processing your payment...</p>
          )}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default CheckoutPage;
