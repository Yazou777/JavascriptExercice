var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
console.log(tab);
console.log(tab.length)
/*var prenom = prompt("Saisisez un prénom");*/


function recherche(prenom)
{
    var i = 0
while (i <tab.length)
{
    console.log(tab[i]);
  
if ( tab[i] == prenom )
{
    console.log("trouvé");
    tab.splice(i,1);
    tab.length =10;
    console.log(tab);
    i=0;
    recherche(prompt("Saisisez un prénom"));
}
i++;
}
console.log("error")
}
recherche(prompt("Saisisez un prénom"));
console.log(tab);
console.log(tab.length)

