// Definición de productos
const productos = [
  {
      id: 1,
      categoria: 'catalogo',
      nombre: 'Nintendo Switch',
      descripcion: 'Descubre tres modos de juego diferentes',
      precio: 950.00,
      imagen: '/imagenes/s.jpg'
  },
  {
      id: 2,
      categoria: 'catalogo',
      nombre: 'Super Smash Bros Ultimate',
      descripcion: 'Juego Smash Bros',
      precio: 120.00,
      imagen: '/imagenes/22.jpg'
  },
  {
      id: 3,
      categoria: 'catalogo',
      nombre: 'Super Mario Odyssey',
      descripcion: 'Juego Mario Odyssey',
      precio: 140.00,
      imagen: '/imagenes/ma.jpg'
  },
  {
      id: 4,
      categoria: 'catalogo',
      nombre: 'PS5',
      descripcion: 'Consola PS5',
      precio: 1900.00,
      imagen: '/imagenes/ps5.jpg'
  },
  {
      id: 5,
      categoria: 'catalogo',
      nombre: 'Mando Pro',
      descripcion: 'Mand Pro para usar en la Nintendo',
      precio: 240.00,
      imagen: '/imagenes/pro.jpg'
  },
  {
      id: 6,
      categoria: 'catalogo',
      nombre: 'Zelda Breath of the Wild',
      descripcion: 'Juego Zelda Breath of the Wild',
      precio: 150.00,
      imagen: '/imagenes/zeld.jpg'
  }
];


let carrito = [];


function generarProductoHTML(producto) {
  return `
      <div class="col-12 col-md-4">
          <div class="product-card d-flex flex-column justify-content-between h-100">
              <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image"> 
              <h3>${producto.nombre}</h3>
              <p>${producto.descripcion}</p>
              <p class="text-primary font-weight-bold">S/ ${producto.precio.toFixed(2)}</p>
              <button class="btn btn-primary agregar-carrito" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar al Carrito</button>
          </div>
      </div>
  `;
}


function mostrarProductosEnDOM() {
  const containerCatalogo = document.querySelector('#catalogo .row');

  productos.forEach(producto => {
      if (producto.categoria === 'catalogo') {
          const htmlProducto = generarProductoHTML(producto);
          containerCatalogo.innerHTML += htmlProducto;
      }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  mostrarProductosEnDOM();
});
