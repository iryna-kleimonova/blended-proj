//Логіка сторінки Home
import axios, { all } from 'axios';
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from './js/products-api';
import { refs } from './js/refs';
import { markupCategories, markupProducts } from './js/render-function';

export async function initHomePage() {
  try {
    const categories = await fetchCategories();
    const allCategories = ['All', ...categories];
    markupCategories(allCategories);
    const products = await fetchProducts();
    markupProducts(products);
  } catch (error) {
    console.error('Error initializing homepage:', error);
  }
}

initHomePage();

refs.allCategories.addEventListener('click', async event => {
  const clickedBtn = event.target.closest('.categories__btn');
  //   console.log(clickedBtn.textContent);
  if (!clickedBtn) {
    return;
  }
  if (clickedBtn.textContent === 'All') {
    const products = await fetchProducts();
    markupProducts(products);
  } else {
    const products = await fetchProductsByCategory(clickedBtn.textContent);
    markupProducts(products);
    //   console.log(products);
  }
});
