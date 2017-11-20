 function ajout (){
    if ($("#name").val() == ""
    || $("#firstname").val() == ""
    || $("#birth").val() == ""
    || $("#adresse").val() == ""
    || $("#mail").val() == "") {
    alert("certaines informations sont manquantes !! veuillez les completer, merci ")
} else {

 document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
 '<tr><td>'+$("#name").val()
 +'</td><td>'+$("#firstname").val()
 +'</td><td>'+$("#birth").val()
 +'</td><td> <a href ="https://www.google.fr/maps" target="_blank">'
 +$("#adresse").val()+'</a></td><td><a href="https://accounts.google.com/" target="_blank">'
 +$("#mail").val()+'</a></td></tr>'
 
 
 document.getElementById("confirmation").removeAttribute("hidden");
 document.getElementById("confirmation").innerHTML = " Bravo le formulaire est sauvgardé ";


 };
};