// Validación de formularios (si tienes formularios con .needs-validation)
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Funciones del carrito
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
  const totalQty = getCart().reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = totalQty;
}

// Agregar productos desde el catálogo
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const name = btn.dataset.name;
      const desc = btn.dataset.desc;
      const image = btn.dataset.image;
      const price = parseFloat(btn.dataset.price);

      let cart = getCart();
      const existing = cart.find(p => p.id === id);
      if (existing) {
        existing.qty++;
      } else {
        cart.push({ id, name, desc, image, price, qty: 1 });
      }

      saveCart(cart);
      updateCartCount();
      alert(`Producto agregado: ${name}`);
    });
  });

  // Renderiza carrito si estamos en cart.html
  const container = document.getElementById('cartContainer');
  const summary = document.getElementById('cartSummary');
  if (container && summary) {
    const cart = getCart();
    if (cart.length === 0) {
      container.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
      summary.innerHTML = '';
      return;
    }

    let total = 0;
    let html = '<ul class="list-group">';
    cart.forEach(item => {
      const subtotal = item.price * item.qty;
      total += subtotal;
      html += `
        <li class="list-group-item d-flex align-items-center">
          <img src="../${item.image}" class="me-3 rounded" style="width:60px; height:60px; object-fit:cover;" alt="${item.name}">
          <div class="flex-grow-1">
            <strong>${item.name}</strong><br>
            <small>${item.desc}</small><br>
            <small>Precio unitario: $${item.price.toLocaleString()}</small><br>
            <small><strong>Subtotal:</strong> $${subtotal.toLocaleString()}</small>
          </div>
          <span class="badge bg-secondary me-3">${item.qty}</span>
          <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}">✕</button>
        </li>`;
    });
    html += '</ul>';
    container.innerHTML = html;

    summary.innerHTML = `
      <p class="h5 mt-3">Total: $${total.toLocaleString()}</p>
      <button class="btn btn-danger mt-2" id="clearCart">Vaciar Carrito</button>
    `;

    // Eliminar individual
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = +btn.dataset.id;
        const updated = getCart().filter(p => p.id !== id);
        saveCart(updated);
        location.reload();
      });
    });

    // Vaciar carrito
    document.getElementById('clearCart').onclick = () => {
      localStorage.removeItem('cart');
      location.reload();
    };
  }
});

