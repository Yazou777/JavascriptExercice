/*var nombre = prompt("entrez un nombre");
var multi = prompt("Entrez un multiplicateur");
function produit(x ,y)
{ 
    cube = nombre*nombre*nombre; 
var resultat = nombre * multi;
return resultat;
}
var egal = produit(nombre ,multi);
console.log(produit(nombre ,multi));
document.write("Le cube de "+nombre+" est égal à "+cube+"<br>Le produit de "+nombre+" x "+multi+" est égal à "+egal);*/



/*var nombre = prompt("entrez un nombre");
var multi = prompt("Entrez un multiplicateur");*/

/*
function produit(x ,y)
{ 
    X=x;
    Y=y;
    cube = x*x*x; 
var resultat = x * y;
console.log(egal);
document.write("Le cube de "+X+" est égal à "+cube+"<br>Le produit de "+X+" x "+Y+" est égal à "+resultat);
return  ;
}
var egal = produit(prompt("entrez un nombre") ,prompt("Entrez un multiplicateur"));



function image(image)
{
    document.getElementById("test").innerHTML = image;
}
image("<img src= https://ncode.amorce.org/ressources/Pool/TB_DEV/WEB_Javascript_BASES/images/papillon.jpg>");
*/

function strtok(str1, str2, n)
{  
const words = str1.split(str2);
alert(words[n - 1]);
}
strtok("robert.dupont.amiens.8000",".",3 );