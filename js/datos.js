document.addEventListener('DOMContentLoaded', function() {
    const listaProductos = document.getElementById('listaProductos');
    const totalElement = document.getElementById('total');
    const descuentoElement = document.getElementById('descuento');
    const totalPagarElement = document.getElementById('totalPagar');

    function actualizarCarrito(carrito, cantidadProductos) {
        listaProductos.innerHTML = '';
        let total = 0;
        let cantidadTotalProductos = 0;

        carrito.forEach((producto, index) => {
            total += producto.precio * producto.cantidad;
            cantidadTotalProductos += producto.cantidad;

            const productoHTML = `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">S/ ${producto.precio}</p>
                                <div class="btn-cantidad">
                                    <button class="btn btn-danger me-2" onclick="cambiarCantidad(${index}, -1)">-</button>
                                    <span class="cantidad">${producto.cantidad}</span>
                                    <button class="btn btn-success ms-2" onclick="cambiarCantidad(${index}, 1)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            listaProductos.insertAdjacentHTML('beforeend', productoHTML);
        });

     
        let descuento = 0;
        if (cantidadTotalProductos >= 10) {
            descuento = total * 0.30;
        } else if (cantidadTotalProductos >= 6) {
            descuento = total * 0.25;
        } else if (cantidadTotalProductos >= 3) {
            descuento = total * 0.10;
        }

        const totalConDescuento = total - descuento;

      
        if (descuento > 0) {
            descuentoElement.textContent = `Descuento aplicado: -S/ ${descuento.toFixed(2)}`;
        } else {
            descuentoElement.textContent = '';
        }

        totalElement.textContent = `S/ ${total.toFixed(2)}`;
        totalPagarElement.textContent = `S/ ${totalConDescuento.toFixed(2)}`;

        localStorage.setItem('carrito', JSON.stringify(carrito));
        localStorage.setItem('cantidadProductos', cantidadTotalProductos);
        document.getElementById('carritoCantidad').textContent = cantidadTotalProductos;
    }

    window.cambiarCantidad = function(index, cambio) {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        if (carrito[index].cantidad + cambio > 0) {
            carrito[index].cantidad += cambio;
        } else {
            carrito.splice(index, 1);
        }
        const cantidadProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        actualizarCarrito(carrito, cantidadProductos);

        
        mostrarMensaje('Cantidad actualizada.');
    }

    document.addEventListener('carritoActualizado', function(event) {
        const { carrito, cantidadProductos } = event.detail;
        actualizarCarrito(carrito, cantidadProductos);
    });

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length === 0) {
        listaProductos.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        const cantidadProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        actualizarCarrito(carrito, cantidadProductos);
    }

});