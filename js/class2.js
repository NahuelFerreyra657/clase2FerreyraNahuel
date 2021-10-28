let nombreUsuario =prompt ("Cúal es tu nombre?");
alert("Hola "  +  nombreUsuario);
let edad = Number (prompt ( nombreUsuario +"  cuántos años tenés? "));
let generoManga = (prompt ("Qué te gustaria leer:shounen,shojo,yuri o yaoi?"))
 if ( generoManga== "shounen") {
console.log("Te recomendamos que leas NARUTO");
 } else if ( generoManga== "shojo"){
console.log ("Te recomendamos que leas FRUITS BASKET ");
}  else if ((edad >="18") && ( generoManga== "yuri")) {
 console.log ("Te recomendamos que leas CITRUS ");
}  else if ((edad >="18") && (generoManga== "yaoi")) {
    console.log ("Te recomendamos que leas JUNJO ROMANTICA");
} else {
    console.log ("Este género es para mayores de 18 años");
}