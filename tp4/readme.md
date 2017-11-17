<p align="center">
  <a href="https://3ir2018.slack.com">
     <img src="https://github.com/bilelz/tpaw2018/blob/master/galilee.png?raw=true" alt="Logo Master" width=100/>
  </a>  
  <br/>
  Master 3IR² | <a href="https://3ir2018.slack.com/messages/aw">3ir2018.slack.com</a>
<h3 align="center">TP AW #4 : 
Ajout de fonctionnalités HTML5 au formulaire
</h3>
<h1>⚠️VERSION BROUILLON⚠️</h1>
</p>

### Prérequis (⚠️ important)

* Lire **tout** l'énnoncé avant de commencer le TP.

❓❓Si vous avez des questions ou des erreurs dans votre code : 
* formater (indenter) bien votre code (raccourci Visual Studio Code : Ctrl + K puis Ctrl + F)
* demander à Google 🔍
* demander à vos camarades 👩‍🎓👨‍🎓
* demander au professeur 🙋

Table des matières
=================

  1. [Objectif du TP](#1-objectif-du-tp)
  2. [Plateforme de dév](#2-plateforme-de-dév)
  3. [Création du formulaire avec Bootstrap](#3-création-du-formulaire-avec-bootstrap)
  4. [Validation jQuery](#4-validation-jquery)
  5. [Affichage d'une popup (modal)](#5-affichage-dune-popup-modal)
  6. [Ajout d’un calendrier jQueryU](#6-ajout-dun-calendrier-jqueryui)
  
  
## 1. Objectif du TP
* HTML5: Commencer à utiliser les capacités avancées (géolocalisation)
* JS : écrire un code modulaire
* 



Reprenez le formulaire du [TP 3](../tp3/) permettant de saisir :
* Nom
* Prénom 
* Date de naissance
* Adresse postale
* Adresse mail

![Texte alternatif](image4.png "texte pour le titre, facultatif")   


## 2. Plateforme de dév (idem que le TP3)

  * Télécharger le code source *compilé* (Compiled CSS and JS) de Bootstrap dans votre dossier TP3 :    http://getbootstrap.com/docs/4.0/getting-started/download/

  * Télécharger (click droit : ```enregistrer sous...```) popper.js qui facilite l'affichage des modal et tooltip :
  https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js

  * Télécharger (click droit : ```enregistrer sous...```) la version slim de jquery dans votre dossier tp3/js: https://code.jquery.com/jquery-3.2.1.slim.min.js

Votre répertoire doit ressembler à ça:


```
tp3/
├── index.html
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.min.css
└── js/
    ├── bootstrap.js
    └── bootstrap.min.js
    ├── popper.min.js
    └── jquery-3.2.1.slim.min.js   
    └── form-jquery-validation.js
```

* Clé Google Map Image à utiliser
```AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg```

Exemple avec une image centrée sur Paris: <a href="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg">
<img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" alt='google map' width=200/>
</a><br/>
```https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg```

Copier ces imports de scripts JS et CSS dans la section \<HEAD\>

```html
<!-- jquery pour pouvoir utiliser les composants JS de boostap (modal, tooltip...) -->
<script src="js/jquery-3.2.1.slim.min.js"></script>

<!-- CSS boostrap -->
<link rel="stylesheet" href="css/bootstrap.min.css">

<script src="js/popper.min.js"></script>

<!-- composants JS de boostrap (modal http://getbootstrap.com/docs/4.0/components/modal/ , collapse...) -->
<script src="js/bootstrap.min.js"></script>
```

## 2. Geolocalisation HTML5
  * L'API Géolocalisation HTML5  est utilisée pour obtenir la position géographique d'un utilisateur (si il utilise un navigateur récent)
  * Ajouter un bouton à coté du champ de saisie de l’adresse 
  * en JQuery, intercepter le click sur ce bouton et écrire une fonction pour demander la géolocalisation à l’utilisateur
    * reprendre le code JS sur cette exemple: http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation_map

  * documentation et fonction JS de géolocalisation disponibles ici : http://www.w3schools.com/html/html5_geolocation.asp
  
```javascript
  var map = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        $("#map").html("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
    
    $("#map").html("<img src='"+img_url+"'>");
}
//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $("#map").html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#map").html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            $("#map").html("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            $("#map").html("An unknown error occurred.");
            break;
    }
}
```

La géolocalisation vous donnera la lattitude et la longitude de l’utilsateur.

Afficher une image (dans le code JS ci-dessus ça s'affiche dans une DIV avec id=map) de Google Maps centrée sur ces coordonnées GPS (documentation de l’API google maps)

URL de l’image : https://maps.googleapis.com/maps/api/staticmap?markers=latitude,longitude&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg

## 4. Afficher le nombre de caractère saisie (jQuery)
![Texte alternatif](image3.png "texte pour le titre, facultatif")
A coté de chaque champ de saisie, afficher le nombre de caractère saisie en temps réel, c’est-à-dire à chaque fois que l’utilisateur change le contenu du champ.
Events jQuery relatifs à la saisie : https://api.jquery.com/category/events/keyboard-events/


## 5. Stockage du formulaire dans le LocalStorage du navigateur

![Texte alternatif](image1.png "texte pour le titre, facultatif")   
HTML Local storage permet de stocker des données dans le navigateur web (comme les cookies) via une combinaison clé:valeur (key:value)
Exemple

* Pour stocker la valeur “smith” dans la clé “lastname” :  
```js
localStorage.setItem("lastname", "Smith");
```
* Pour lire la valeur de la clé  :
```js
var prenom = localStorage.getItem("lastname");
```

* Documentation : http://www.w3schools.com/html/html5_webstorage.asp

  1. A chaque fois que l’utilisateur cliquera sur le bouton “Valider” du formulaire, enregistrer les valeurs de tous les champs de saisie dans le localStorage du navigateur et afficher un message “Bravo! Le formulaire est sauvegardé.” à l’utilisateur.


