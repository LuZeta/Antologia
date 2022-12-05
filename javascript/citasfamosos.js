const divCitas = document.querySelector("#citaFamoso_div");

let quotes = [];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4b7ea05b3fmsh3018449e36ef6a5p14ff00jsn9ce3e251f2ff",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((response) => response.json())
  .then((data) => {
    quotes = data;
    console.log(quotes);

    const div = document.createElement("div");
    div.innerHTML = `
       <h2>${quotes.content}</h2>`;

    divCitas.append(div);
    console.log(div);
  })
  .catch((err) => console.error(err));
