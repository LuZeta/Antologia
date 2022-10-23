//probamos While

let gatitos = 0;

while (gatitos < 5) {
  alert(
    "Si oprimes tendrás la maldicion de la Señora de los Gatos de los Simpsons y estos no dejaran de aparecer (x5 - abre tu consola)"
  );
  console.log("te lo advertí, seguiras sumando gatitos");
  gatitos = gatitos + 1;
}

//probamos for
for (let garritas = 0; garritas < 5; garritas++) {
  console.log("changos, una gatera esto");
}

//probamos anidado
for (let garritas = 0; garritas < 5; garritas++) {
  console.log("la gata mas vieja pario gatitos");
  for (let catbaby = 0; catbaby < 5; catbaby++) {
    console.log(
      "necesito un trabajo de desarrolladora para alimentar a todos los gatitos"
    );
  }
}

//do while
let moraleja = 0;
do {
  console.log(
    "probamos contar gatos con do while y asi ejemplificamos el uso de ciclos"
  );
  moraleja++;
} while (moraleja < 5);
