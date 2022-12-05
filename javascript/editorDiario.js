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
       <p>${quotes.content}</p>`;

    divCitas.append(div);
    console.log(div);
  })
  .catch((err) => console.error(err));

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
