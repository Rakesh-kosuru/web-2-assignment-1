// display the first 20 products from the JSON file.
import data from './data-pretty.json' with { type: 'json' };

const PRODUCT_COUNT = 20;
//function to create a card for each product

function createCard(product) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img class="thumb">
    <div class="info">
      <div>
        <div class="title"></div>
        <div class="price"></div>
      </div>
      <button class="add-btn" type="button">+</button>
    </div>
  `;

// set the image source and alt text, and add a click event listener to show an alert with the product ID
  const img = card.querySelector('.thumb');
  img.src = product.thumbnail;
  img.alt = product.title;
  img.addEventListener('click', () => alert(`Product ID: ${product.id}`));

  card.querySelector('.title').textContent = product.title;
  card.querySelector('.price').textContent = `$${product.price}`;
// add a click event listener to show an alert with the product ID and title
  const btn = card.querySelector('.add-btn');
  btn.addEventListener('click', () =>
    alert(`Product ID: ${product.id}\nTitle: ${product.title}`));

  return card;
}
//function to initialize the product grid
function initializeProductGrid() {
  const grid = document.querySelector('#product-grid');
  //loop through the first 20 products and create a card for each one.
  for (let i = 0; i < PRODUCT_COUNT; i++) {
    grid.appendChild(createCard(data.products[i]));
  }
}

initializeProductGrid();