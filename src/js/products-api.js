// Функції для роботи з бекендом

import axios from 'axios';
// import { BASE_URL, LIMIT } from './constants';

axios.defaults.baseURL = 'https://dummyjson.com';

export async function fetchCategories() {
  try {
    const response = await axios.get(`/products/category-list`);
    //   console.log(response.data.products);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function fetchProducts(page = 1, limit = 12) {
  const skip = (page - 1) * limit;
  try {
    const response = await axios.get(`/products?limit=${limit}&skip=${skip}`);
    //   console.log(response.data.products);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchProductsByCategory(category) {
  try {
    const response = await axios.get(`/products/category/${category}`);
    // console.log(response.data.products);
    return response.data.products;
  } catch (error) {
    console.error(`Error fetching products by category:`, error);
    throw error;
  }
}

export async function searchProducts(query, page = 1, limit = 12) {
  const skip = (page - 1) * limit;
  try {
    const response = await axios.get(
      `/products/search?q=${query}&limit=${limit}&skip=${skip}`
    );
    return response.data.products;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
}

export async function fetchProductById(id) {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
}
