const verCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h1 class="modal-header-title"> Carrito </h1>`;
    modalContainer.append(modalHeader);
  
    const modalbutton = document.createElement("h2");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalHeader.appendChild(modalbutton);
  
    modalbutton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
  
    carrito.forEach((product) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.id = product.id;
      carritoContent.innerHTML += `
      <img src = "${product.image}">
      <h3>${product.name}</h3>
      <p>$ ${product.price} </p>
      <p>Cantidad ${product.amount}</p>
      <p>Total: ${product.amount * product.price}</p>
      `;
      modalContainer.appendChild(carritoContent);
      

      let eliminar = document.createElement("span");
      eliminar.id = product.id;
      eliminar.innerText = "❌";
      eliminar.className = "delete-product";
      carritoContent.appendChild(eliminar);

      eliminar.addEventListener("click", eliminarProducto);
    
    });
  
    const total = carrito.reduce((acc, el) => acc + el.price * el.amount, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    modalContainer.appendChild(totalCompra);
  };
  
  modalCarro.addEventListener("click", verCarrito)

/*eliminar producto del carrito*/
const eliminarProducto = (event) => {
  let currentId = event.currentTarget.id;
  const foundId = carrito.find((element) => element.id == currentId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
    
  });

verCarrito();

};




