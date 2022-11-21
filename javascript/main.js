const cardsContainer = document.querySelector(".cards-container");
const modalCarro = document.querySelector(".carro");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let productId = 1;

productList.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("infoProducto");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;
  const productName = document.createElement("p");
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement("figure");

  const btn = document.createElement("button");
  btn.innerHTML = "<img src='../assets/carrito-de-compras.png'>";
  productInfoFigure.appendChild(btn);

  btn.addEventListener("click", () => {
    /*agrego cantidad a los productos del carrito*/
    const repeat = carrito.some(
      (repeatProduct) => repeatProduct.id === product.id
    );
    console.log(repeat);

    /*si some es true (tengo porductos con el mismo id, entonces agrego ++
      a la cantidad)*/

    if (repeat) {
      carrito.map((productos) => {
        if (productos.id === product.id) {
          productos.amount++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        amount: product.amount,
      });
    }

    productId++;
    console.log(productId);

    carritoCounter();
    saveLocal();
  });

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
  console.log(product);
});

/*set item*/
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

/*get item
JSON.parse(localStorage.getItem("carrito"));
lo agrego a mi array vacío del comienzo*/
