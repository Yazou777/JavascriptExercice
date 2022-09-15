/*var nbBoucle= 1

do 
{   
    var saisie = window.prompt("Invite de script :" + "\n\nSaisissez le prénom N°" +nbBoucle+ "\nou Clic sur Annuler pour arrêter le saisie.");
    
   if (nbBoucle == 1)
   {
    var prenom1 = saisie;
    console.log(prenom1);
   }

   if (nbBoucle == 2)
   {
    var prenom2 = prenom1 + saisie;
    console.log(prenom2);
   }
    
    
     console.log(saisie );
    
     console.log(nbBoucle);

    nbBoucle++;
} while (nbBoucle <= 6 && saisie != null && saisie != "");
*/

/*console.log("fin de la boucle");
console.log(saisie);
console.log(nbBoucle);
var nbSaisie = nbBoucle - 2;
window.alert("nombre de saisie = "+ nbSaisie);
windox.alert(prenom1 + prenom2);
console.log()*/


var nbBoucle= 1


while (nbBoucle < 5)
{
    var saisie = window.prompt("Invite de script :" + "\n\nSaisissez le prénom N°" +nbBoucle+ "\nou Clic sur Annuler pour arrêter le saisie.")

if (saisie == null || saisie == "")
{
    nbBoucle = 0;
    break;
}

if (nbBoucle == 1)
   {
    var prenom1 = saisie;
    console.log(prenom1);
   }

if (nbBoucle == 2)
   {
    var prenom2 = saisie;
    console.log(prenom2);
   }

if (nbBoucle == 3)
   {
    var prenom3 = saisie;
    console.log(prenom3);
   }

if (nbBoucle == 4)
   {
    var prenom4 = saisie;
    console.log(prenom4);
   }
nbBoucle++;
}
console.log(saisie);
console.log(nbBoucle);
/*window.alert("nombre de saisie = "+ nbBoucle);
console.log(nbBoucle);
console.log(saisie);
if (saisie != null || saisie != "")
{
    window.alert(prenom1+" "+prenom2+" "+prenom3+" "+prenom4);
}*/

var nbBoucle = nbBoucle -1
console.log(nbBoucle );

switch (nbBoucle || saisie)
{   
  
    case 1 :
     console.log(prenom1); 
     window.alert("Vous avez saisie "+ nbBoucle +" prénom \n\nle prénom était : "+ prenom1); 
     break; 
  
  case 2 :
     console.log(prenom1 + " " + prenom2); 
     window.alert("Vous avez saisie "+ nbBoucle +" prénoms \n\nles prénoms étaient : "+ prenom1+ " " + prenom2);
     break;  

  case 3 :
     console.log(prenom1+" "+prenom2+" "+prenom3);
     window.alert("Vous avez saisie "+ nbBoucle +" prénoms \n\nles prénoms étaient : "+ prenom1+" "+prenom2+" "+prenom3); 
     break;

  case 4 :
     console.log(prenom1+" "+prenom2+" "+prenom3+" "+prenom4);
     window.alert("Vous avez saisie "+ nbBoucle +" prénoms \n\nles prénoms étaient : "+ prenom1+" "+prenom2+" "+prenom3+" "+prenom4);
     break;

  default: 
     console.log("erreur");
} 