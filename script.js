
function toggleNavMenu() {
      const nav = document.getElementById('mobile-nav');
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    }

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
  cart.push({ item, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${item} ditambahkan ke keranjang!`);
}

function loadCart() {
  const cartList = document.getElementById('cart-list');
  const totalTag = document.getElementById('total');
  if (!cartList) return;

  let total = 0;
  cartList.innerHTML = '';
  cart.forEach(({ item, price }) => {
    const li = document.createElement('li');
    li.textContent = `${item} - Rp${price.toLocaleString()}`;
    cartList.appendChild(li);
    total += price;
  });
  totalTag.textContent = `Total: Rp${total.toLocaleString()}`;
}
function toggleNavMenu() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('show');
  }
  function toggleNavMenu() {
    const nav = document.getElementById('mobile-nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  }
  

// Sembunyikan dropdown saat klik di luar
document.addEventListener('click', function (e) {
  if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
    searchResults.style.display = 'none';
  }
});

function addMultipleToCart(items) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  items.forEach(item => {
    const qty = quantities[item.menuId] || 0;
    if (qty > 0) {
      const existing = cart.find(c => c.name === item.name && c.merchant === item.merchant);
      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({
          name: item.name,
          price: item.price,
          qty: qty,
          merchant: item.merchant  // Pastikan properti ini ikut disimpan
        });
      }
    }
  });

  function updateNote(index, value) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].note = value;
  localStorage.setItem("cart", JSON.stringify(cart));
}
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item berhasil ditambahkan ke keranjang!");
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    // Lakukan pemrosesan data di sini, misalnya menyimpan ke Google Sheet
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
  }
}

if (existingMerchant && existingMerchant !== merchant) {
  const konfirmasi = confirm(`Kamu sudah memiliki pesanan dari merchant ${existingMerchant}. Hapus keranjang dan lanjutkan pesanan dari ${merchant}?`);
  if (konfirmasi) {
    cart = []; // kosongkan keranjang
  } else {
    return;
  }
}  

window.onload = loadCart;
