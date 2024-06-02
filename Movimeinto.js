// Agregar un artículo al carrito
function agregaramiscompras(nombre, precio, cantidad, imagen) {
    const carritoItems = document.querySelector('.carrito-items');
  
    const carritoItem = document.createElement('div');
    carritoItem.classList.add('carrito-item');
    carritoItem.dataset.nombre = nombre;
    carritoItem.dataset.precio = precio;
    carritoItem.dataset.cantidad = cantidad;
  
    carritoItem.innerHTML = `
      <img src="${imagen}" alt="${nombre}" class="carrito-item-image">
      <div class="carrito-item-details">
        <h3>${nombre}</h3>
        <p>Precio: $${precio}</p>
        <p>Cantidad: ${cantidad}</p>
      </div>
    `;
  
    carritoItems.appendChild(carritoItem);
    actualizarTotalEnPagina(); // Actualizar el total al agregar un artículo
  }
  
  // Calcular el total del carrito
  function calcularTotalCarrito() {
    let total = 0;
    const carritoItems = document.querySelectorAll('.carrito-item');
  
    carritoItems.forEach(item => {
      const precio = parseFloat(item.dataset.precio);
      const cantidad = parseFloat(item.dataset.cantidad);
      total += precio * cantidad;
    });
  
    return total.toFixed(2);
  }
  
  // Actualizar el total en la página
  function actualizarTotalEnPagina() {
    const total = calcularTotalCarrito();
    const totalElement = document.querySelector('.total-price');
    totalElement.textContent = `Total: $${total}`;
  }
  
  // Filtrar productos por categoría
  function filtrarProductos(category) {
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      if (category === 'all' || product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  
  // Filtrar categorias
  document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter');
  
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        const category = filter.dataset.category;
        filtrarProductos(category);
      });
    });
  });
  
  document.getElementById('realizar-pago').addEventListener('click', function() {
    var mensajePago = document.getElementById('mensaje-pago');
    mensajePago.textContent = 'Pago realizado con éxito!';
    mensajePago.style.display = 'block';
    mensajePago.style.color = 'green';
    mensajePago.style.fontWeight = 'bold';
  });