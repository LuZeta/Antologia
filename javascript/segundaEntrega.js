let UserName = prompt("ingresa tu nombre ");

function saludar() {
  return alert("Bienvenido " + UserName);
}

saludar();

function PlantillaDiario(temaFondo, mascotaVirtual, renglones) {
  this.temaFondo = temaFondo;
  this.mascotaVirtual = mascotaVirtual;
  this.renglones = renglones;
}

const plantillaDiarioRed = new PlantillaDiario(
    "red", 
    "ave", 
    "con renglones"
    );
const plantillaDiarioBlue = new PlantillaDiario(
  "blue",
  "gato",
  "sin renglones"
);
const plantillaDiarioYellow = new PlantillaDiario(
  "yellow",
  "perro",
  "con renglones"
);

console.log(plantillaDiarioRed);
console.log(plantillaDiarioBlue);
console.log(plantillaDiarioYellow);

function crearplantilla() {
  alert(
    UserName +
      "elige las siguientes opciones para crear tu plantilla personalizada (console.log)"
  );
  console.log(plantillaDiarioRed);
  console.log(plantillaDiarioBlue);
  console.log(plantillaDiarioYellow);

  return prompt("Se creara la siguiente plantilla: ");
}
crearplantilla();

