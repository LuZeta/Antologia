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
      carritoContent.innerHTML = `
      <img src = "${product.image}">
      <h3>${product.name}</h3>
      <p>$ ${product.price} </p>
      `;
      modalContainer.appendChild(carritoContent);
    });
  
    const total = carrito.reduce((acc, el) => acc + el.price, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar: $${total} `;
    modalContainer.appendChild(totalCompra);
  };
  
  modalCarro.addEventListener("click", verCarrito)