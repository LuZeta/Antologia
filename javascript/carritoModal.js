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
      <h5>${product.name}</h5>
      <p>$ ${product.price} </p>
      <span class="restar"> - </span>
      <p>${product.amount}</p>
      <span class="sumar"> + </span>
      <p>Total: $${product.amount * product.price}</p>
      `;

    modalContainer.appendChild(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    let sumar = carritoContent.querySelector(".sumar");

    restar.addEventListener("click", () => {
      if (product.amount != 1) {
        product.amount--;
      }
      saveLocal();
      verCarrito();
    });
    sumar.addEventListener("click", () => {
      product.amount++;
      saveLocal();
      verCarrito();
    });

    let eliminar = document.createElement("span");
    eliminar.id = product.id;
    eliminar.innerText = "x";
    eliminar.className = "delete-product";
    carritoContent.appendChild(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });

  const total = carrito.reduce((acc, el) => acc + el.price * el.amount, 0);
  const totalCompra = document.createElement("div");
  totalCompra.className = "total-content";
  totalCompra.innerHTML = `Total a pagar: $${total}`;
  modalContainer.appendChild(totalCompra);

  let pagar = document.createElement("div");
  pagar.className = "pagar";
  pagar.innerHTML = `
    <p>Finalizar Compra</p>`;
  modalContainer.appendChild(pagar);
  /*pendiente: darle funcionalidad al link de pago*/
};

modalCarro.addEventListener("click", verCarrito);

/*eliminar producto del carrito*/
const eliminarProducto = (event) => {
  let currentId = event.currentTarget.id;
  const foundId = carrito.find((element) => element.id == currentId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoCounter();
  saveLocal();
  verCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();
