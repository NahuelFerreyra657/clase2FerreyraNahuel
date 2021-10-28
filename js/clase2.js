let nombreUsuario =prompt ("Cúal es tu nombre?");
alert("Hola "  +  nombreUsuario);
const edad = Number (prompt ( nombreUsuario +"  cuántos años tenés? "));
const generoManga = (prompt ("Qué te gustaria leer:shounen,shojo o yaoi?"))
 if ((edad <"18" && generoManga== "shounen") || (edad >"18" && generoManga== "shounen")){
console.log("Te recomendamos que leas NARUTO");
 } else if ((edad <"18" && generoManga== "shojo")|| (edad >"18" && generoManga== "shojo")){
console.log ("Te recomendamos que leas FRUITS BASKET ");
}  

 if ((edad >="18") && (generoManga== "yaoi")) {
    console.log ("Te recomendamos que leas JUNJO ROMANTICA");
} else {
    console.log ("Este género es para mayores de 18 años");
}








