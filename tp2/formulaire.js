
function validation(){




if(document.getElementById("Nom").value.length<5 ||
   document.getElementById("Prenom").value.length<5 || 
   document.getElementById("Date").value.length<10 ||
   document.getElementById("Adresse").value.length<5 ||
   document.getElementById("Mail").value.length<5)

{

document.getElementById("resultat").setAttribute("hidden","hidden");

document.getElementById("error").removeAttribute("hidden");

document.getElementById("error").innerHTML = "La saisie de tout les champs est obligatoire";

}

else{

document.getElementById("error").setAttribute("hidden","hidden");

document.getElementById("resultat").removeAttribute("hidden");

document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Nom").value+" "+document.querySelector("#prenom").value;

}




}