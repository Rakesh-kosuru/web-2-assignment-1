// display the first 20 products from the JSON file.
import data from './data-pretty.json' with { type: 'json' };

const PRODUCT_COUNT = 20;

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


  const img = card.querySelector('.thumb');
  img.src = product.thumbnail;
  img.alt = product.title;
  img.addEventListener('click', () => alert(`Product ID: ${product.id}`));

  card.querySelector('.title').textContent = product.title;
  card.querySelector('.price').textContent = `$${product.price}`;

  const btn = card.querySelector('.add-btn');
  btn.setAttribute('aria-label', `Add ${product.title} to cart`);
  btn.addEventListener('click', () =>
    alert(`Product ID: ${product.id}\nTitle: ${product.title}`));

  return card;
}

function init() {
  const grid = document.querySelector('#product-grid');
  for (let i = 0; i < PRODUCT_COUNT; i++) {
    grid.appendChild(createCard(data.products[i]));
  }
}

init();