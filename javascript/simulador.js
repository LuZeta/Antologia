
let edad = prompt('para crear tu cuenta debes ingresar tu edad');

if (edad >= 12) {
    alert ('puedes crear tu cuenta')
} else {
    alert ('debes tener la cuenta de un adulto asociada')
}

let usuario = 'Ximena';
let usuario2 = 'Nicolas';

let UserName = prompt ('Ingresa tu nombre -prueba Ximena o Nicolas-');

if (UserName === usuario) {
    alert(usuario + ', ' + 'elige tu plantilla para comenzar tu diario');
} else if (UserName === usuario2) {
    alert(usuario2 + ', ' + 'elige tu plantilla para comenzar tu diario'); 
} else {
    alert('debes crear una cuenta para usar las plantillas')
}



function crearplantilla() {
    alert (UserName + ', ' + 'elige las siguientes opciones para crear tu plantilla personalizada');
    let color = prompt('color de fondo');
    let animales = prompt('elige que mascota te acompañara');
    let fecha = prompt('escribe la fecha de hoy para guardar tu plantilla diaria');
    return(
     console.log('Se creara la siguiente plantilla: ', color, animales, fecha)
    ); 
};

crearplantilla();