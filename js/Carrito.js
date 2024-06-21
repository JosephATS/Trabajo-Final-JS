document.addEventListener('DOMContentLoaded', function() {
    const carritoCantidadElement = document.getElementById('carritoCantidad');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function agregarAlCarrito(event) {
        const boton = event.target;
        const id = boton.getAttribute('data-id');
        const nombre = boton.getAttribute('data-nombre');
        const precio = parseFloat(boton.getAttribute('data-precio'));

        const producto = {
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1 
        };

        
        const productoExistente = carrito.find(p => p.id === id);
        if (productoExistente) {
            productoExistente.cantidad++; 
        } else {
            carrito.push(producto); 
        }

     
        localStorage.setItem('carrito', JSON.stringify(carrito));
        const cantidadProductos = carrito.reduce((total, p) => total + p.cantidad, 0);
        carritoCantidadElement.textContent = cantidadProductos;
        localStorage.setItem('cantidadProductos', cantidadProductos);

    }


    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    const iconoCarrito = document.querySelector('.carrito');
    iconoCarrito.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('Productos-detalle.html', '_blank'); 
    });

    function mostrarMensaje(mensaje) {
        const mensajeDiv = document.createElement('div');
        mensajeDiv.classList.add('mensaje-agregado');
        mensajeDiv.textContent = mensaje;
        document.body.appendChild(mensajeDiv);

        setTimeout(function() {
            mensajeDiv.remove(); 
        }, 3000);
    }
});