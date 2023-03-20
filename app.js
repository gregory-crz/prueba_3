

/*const nombre = prompt("Bienvenido, cual es tu nombre")

const edad = prompt("Cual es tu edad")

console.log("hola " + nombre+ " Tu edad es: " + edad);

const texto = prompt("ingresa un texto")

console.log("Número de caracteres: "+ texto.length);*/
const edad_maxima = 81;
const edad = parseInt(prompt("Ingrese su edad"));

console.log("Usted representa " + edad*365 +" días de edad"); 

const snack_favorito = prompt("Cual es tu snack favorito") 

const snack_X_dia = prompt("cuantos snack comes al día");

const te_quedaX_comer = (edad - edad_maxima)*365;

const valor_snack = parseInt( prompt("Ingresa el valor de tu snack "))

alert("Necesitarás "+ ( te_quedaX_comer * valor_snack ) +" NN snacks para que te alcancen hasta los XX años")

console.log("Te quedan por comer "+te_quedaX_comer+" el resto de tu vida");