
/*crear texto en plantilla de diario*/
function f1() {
  document.querySelector("textarea").style.fontWeight = "bold";
}
function f2() {
  document.querySelector("textarea").style.fontStyle = "italic";
}
function f3() {
  document.querySelector("textarea").style.textAlign = "left";
}
function f4() {
  document.querySelector("textarea").style.textAlign = "center";
}
function f5() {
  document.querySelector("textarea").style.textAlign = "right";
}

function f6() {
  document.querySelector("textarea").style.textTransform = "uppercase";
}
function f7() {
  document.querySelector("textarea").style.textTransform = "lowercase";
}
function f8() {
  document.querySelector("textarea").style.textTransform = "capitalize";
}

function f9() {
  document.querySelector("textarea").style.fontWeight = "normal";
  document.querySelector("textarea").style.textAlign = "left";
  document.querySelector("textarea").style.fontStyle = "normal";
  document.querySelector("textarea").style.textTransform = "capitalize";
  document.querySelector("textarea").value = " ";
}

/*tienda online*/

const productList = [];
productList.push({
  name: "Diario Unicornio",
  price: 250,
  image: "../assets/diario1.jpeg",
});
productList.push({
  name: "Diario Musica",
  price: 250,
  image: "../assets/diario5.jpeg",
});
productList.push({
  name: "Diario Bailarina",
  price: 350,
  image: "../assets/diario5.jpeg",
});
productList.push({
  name: "Diario Llama",
  price: 350,
  image: "../assets/diario4.jpeg",
});
productList.push({
  name: "Diario Llama peluche",
  price: 430,
  image: "../assets/diario5.jpeg",
});
productList.push({
  name: "Diario Harry Potter",
  price: 375,
  image: "../assets/diario5.jpeg",
});
productList.push({
  name: "Diario Death Note",
  price: 350,
  image: "../assets/diario5.jpeg",
});
productList.push({
  name: "Diario Luffy",
  price: 350,
  image: "../assets/diario7.jpeg",
});

for (product of productList) {
  console.log(product.name);
}

//product = {name, price, image}=> prouct.
/*REFERENCIA CARD PRODUCT HTML
<div class="product-card">
<img src="../assets/diario1.jpeg" alt="">
<div class="infoProducto">
  <div>
    <p>$250</p>
    <p>Diario Unicornio</p>
  </div>
  <figure>
    <img src="../assets/carrito-de-compras.png" alt="carrito">
  </figure>
</div>
</div> */


function renderProducts(productList) {
  for (product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  // product= {name, price, image} -> product.image
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('infoProducto');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', '../assets/carrito-de-compras.png');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  const cardsContainer = document.createElement("cardsContainer");
  cardsContainer.classList.add('.cards-container');

  cardsContainer.appendChild(productCard);
}

}
renderProducts(productList);
console.log(renderProducts)