const products = [
  { id:1, name:"Wireless Earbuds", price:1499, image:"https://via.placeholder.com/300x200?text=Earbuds" },
  { id:2, name:"Fitness Band", price:1999, image:"https://via.placeholder.com/300x200?text=Fitness+Band" },
  { id:3, name:"Canvas Backpack", price:2499, image:"https://via.placeholder.com/300x200?text=Backpack" },
  { id:4, name:"Sunglasses", price:999, image:"https://via.placeholder.com/300x200?text=Sunglasses" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("searchInput");

function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "col-sm-6 col-lg-3 mb-4";
    div.innerHTML = `
      <div class="card product-card">
        <img src="${p.image}" class="card-img-top product-img" alt="${p.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${p.name}</h5>
          <p class="text-primary">₹${p.price}</p>
          <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>`;
    productGrid.appendChild(div);
  });
}

function updateCartUI() {
  cartCount.textContent = cart.length;
}

function addToCart(id) {
  const prod = products.find(p => p.id === id);
  if (prod) {
    cart.push(prod);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
    alert(`Added "${prod.name}" to cart.`);
  }
}

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(q));
  renderProducts(filtered);
});

// Initial render
renderProducts(products);
updateCartUI();
