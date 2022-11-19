const cardsContainer = document.querySelector(".cards-container");
const modalCarro = document.querySelector(".carro");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

for (product of productList) {
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
    carrito.push({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
    });
    console.log(carrito);
  });

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
  console.log(product);
}
