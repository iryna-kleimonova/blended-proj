import"./assets/styles-BK7AYJoX.js";import{a as s}from"./assets/vendor-B2YOV0tR.js";s.defaults.baseURL="https://dummyjson.com";async function i(){try{return(await s.get("/products/category-list")).data}catch(r){throw console.error("Error fetching categories:",r),r}}async function n(r=1,e=12){const t=(r-1)*e;try{return(await s.get(`/products?limit=${e}&skip=${t}`)).data.products}catch(c){throw console.error("Error fetching products:",c),c}}async function l(r){try{return(await s.get(`/products/category/${r}`)).data.products}catch(e){throw console.error("Error fetching products by category:",e),e}}const o={allCategories:document.querySelector(".categories"),allProducts:document.querySelector(".products")};function p(r){o.allCategories.innerHTML="";const e=r.map(t=>`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>`).join("");o.allCategories.innerHTML=e}function a(r){o.allProducts.innerHTML="";const e=r.map(t=>`<li class="products__item" data-id="${t.id}">
    <img class="products__image" src="${t.thumbnail}" alt="${t.title}"/>
    <p class="products__title">${t.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${t.brand}</span></p>
    <p class="products__category">Category: ${t.category}</p>
    <p class="products__price">Price: ${t.price}</p>
 </li>
    `).join("");o.allProducts.innerHTML=e}async function u(){try{const e=["All",...await i()];p(e);const t=await n();a(t)}catch(r){console.error("Error initializing homepage:",r)}}u();o.allCategories.addEventListener("click",async r=>{const e=r.target.closest(".categories__btn");if(e)if(e.textContent==="All"){const t=await n();a(t)}else{const t=await l(e.textContent);a(t)}});
//# sourceMappingURL=index.js.map
