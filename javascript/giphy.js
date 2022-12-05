const url = `https://api.giphy.com/v1/gifs/search`;
const keys = `&api_key=a7LALJXx7t22UnRpfb2OnUzfrTBgE8Xu`;
const limite = "&limit=40";
let busqueda = "?q=";
let q = "";
let urlCompleta = "";

const btn = document.getElementById("btn");

btn.onclick = () => {
  document.getElementById("listaGifs").innerHTML = "";

  console.log("btn clicked");
  q = document.getElementById("busqueda").value;
  urlCompleta = url + busqueda + q + keys + limite;
  getData();
};

const getData = async () => {
  await fetch(urlCompleta)
    .then((response) => {
      return response.json();
    })
    .then((giphy) => {
      for (let i = 0; i < giphy.data.length; i++) {
        const gif = document.createElement("img");

        gif.src = giphy.data[i].images["original"].url;
        gif.className = "giphyCards";
        document.getElementById("listaGifs").appendChild(gif);
      }
    });
};

getData();
