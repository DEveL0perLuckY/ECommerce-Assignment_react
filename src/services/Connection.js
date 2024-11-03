import axios from "axios";

const API_URL = "https://6727822b270bd0b97552b1c4.mockapi.io";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Product`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const addProduct = async (productData) => {
  console.log("product data is" + productData);
  try {
    const response = await axios.post(`${API_URL}/Product`, productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/Product/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};