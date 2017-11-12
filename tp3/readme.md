<p align="center">
  <a href="https://3ir2018.slack.com">
     <img src="https://github.com/bilelz/tpaw2018/blob/master/galilee.png?raw=true" alt="Logo Master" width=100/>
  </a>  
  <br/>
  Master 3IR² | <a href="https://3ir2018.slack.com/messages/aw">3ir2018.slack.com</a>
<h3 align="center">TP AW #3 : Bootstrap & jQuery</h3>
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
* Faire connaissance avec [Bootstrap](https://github.com/twbs/bootstrap) (v4) la librairie CSS la plus célèbre
* Utiliser [jQuery](https://jquery.com/) pour y voir les équivalences avec du Javascript Natif
* Utilisation du calendrier Jquery-ui qui a plus de paramètrages que le calendrier natif des navigateurs

Bootstrap est le framework HTML/CSS/JS le plus populaire pour développer des sites web “responsive” et orientés “mobile-first”.

La version 4.0 (que nous utiliserons) vient de sortir, les tutoriels sur internet parlent encore donc souvent de la version 3.3.7.

jQuery ajoute des fonctions au Javascript 'natif', il était beaucoup utilisé dans les années 2007-2015 avant l'arrivée de la dernière version de Javascript ([ES2015](http://www.lilleweb.fr/js/2015/03/23/a-la-decouverte-de-es2015/))

Tuto: http://www.w3schools.com/jquery/default.asp

Le formulaire permettra de saisir les informations suivantes :
* Nom
* Prénom 
* Date de naissance
* Adresse postale
* Adresse mail

![Texte alternatif](https://raw.githubusercontent.com/bilelz/tpaw2018/master/tp3/image1.png "texte pour le titre, facultatif")   


## 2. Plateforme de dév

Télécharger le code source *compilé* (Compiled CSS and JS) de Bootstrap dans votre dossier TP3 : http://getbootstrap.com/docs/4.0/getting-started/download/

Télécharger la version slim de jquery dans votre dossier tp3/js: https://code.jquery.com/jquery-3.2.1.slim.min.js

Votre répertoire tp3 devra ressembler à ça:


```
tp3/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.min.css
└── js/
    ├── bootstrap.js
    └── bootstrap.min.js
    └── jquery-3.2.1.slim.min.js    
```


Copier ces imports de scripts JS et CSS dans la section <HEAD>
```html
<!-- jquery pour pouvoir utiliser les composants JS de boostap (modal, tooltip...) -->
<script src="js/jquery-3.2.1.slim.min.js"></script>

<!-- CSS boostrap -->
<link rel="stylesheet" href="css/bootstrap.min.css">

<!-- composants JS de boostrap (modal http://getbootstrap.com/docs/4.0/components/modal/ , collapse...) -->
<script src="js/bootstrap.min.js"></script>
```

## 3. Création du formulaire avec Bootstrap
    1. Sous la balise <body>, ajouter la DIV :
```html
<div class="container">
  <!-- Content here -->
</div>
```

   2. Elements principaux Bootstrap pour mettre en forme les formulaires
      1. Grilles : http://getbootstrap.com/docs/4.0/layout/grid
      2. Formulaires : http://getbootstrap.com/docs/4.0/components/forms
      * **Utiliser par exemple ce formulaire pour ce TP http://getbootstrap.com/docs/4.0/components/forms/#layout**
      3. Boutons : http://getbootstrap.com/docs/4.0/components/buttons

## 4. Validation jQuery
   1. Créer votre script JavaScript form-jquery-validation.js
```html
<script src="form-jquery-validation.js"></script>
```
Votre code JS/jquery sera structuré comme suit : 

```js
$( document ).ready(function() {
   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );
    
    // Y mettre le code jQuery pour valider tous les champs du formulaire
});
```

   2. Si tous les champs sont correctes, afficher une fenêtre modale (voir [partie 5](#5-affichage-dune-popup-modal)) avec une image statique Google Maps et un lien (ouvrant une nouvelle fenêtre/onglet) vers Google Maps

   3. Equivalence entre Javascript natif et jQuery

|                                 | Javascript                                          | jQuery           |
|---------------------------------|-----------------------------------------------------|----------------------------------------------|
|Attente du chargement de la page | window.onload = function(){ ... };                  | $( document ).ready(function(){ .... });     |
|Selection d'un élément           | document.querySelector("#name")                     | $("#name")                                   |
|valeur d’un champ                | document.querySelector("#name").value;              | $("#name").val()                             |
|Modifier de contenu HTML         | document.querySelector("#name").innerHTML = "blabla   | $("#conteneur").html("Chaine de caractère"); | 
|Modifier de contenu textuelle    | document.querySelector("#name").textContent = "blabla | $("#conteneur").text("Chaine de caractère"); | 
| ajouter un "listener" à un élément | document.querySelector("#submit").addEventListener(function(event){<br/> &nbsp;&nbsp;event.preventDefault(); <br/>&nbsp;&nbsp;console.log( "click" ); <br/>}  |  $("#submit"),on("click",function(event){ <br/>&nbsp;&nbsp;event.preventDefault(); <br/>&nbsp;&nbsp;console.log( "click" ); <br/>}  |

## 5. Affichage d'une popup (modal)
![Texte alternatif](https://raw.githubusercontent.com/bilelz/tpaw2018/master/tp3/image4.png "texte pour le titre, facultatif")   
Modal quand un champ est vide

   1. Ajouter ce code HTML à la fin de votre page HTML (avant la balise </body>)
   
   La modal devra avoir un identifiant pour pouvoir être utiliser en javascript 
```html
<div class="modal" tabindex="-1" role="dialog" id="myModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Corps de la modal à modifier après validation du formulaire</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```

   2. affichage de la modal
```js
   $('#myModal').modal("show");
```

![Texte alternatif](https://raw.githubusercontent.com/bilelz/tpaw2018/master/tp3/image3.png "texte pour le titre, facultatif")   
Modal quand tous les champs sont OK

   3. Pour l'image voir documentation vers Google Static Maps API https://developers.google.com/maps/documentation/static-maps/
   4. L'image devra être entouré par un lien hypertexte vers Google Mapas: http://maps.google.com/maps?q=Paris


## 6. Ajout d’un calendrier jQueryUI

![Texte alternatif](https://raw.githubusercontent.com/bilelz/tpaw2018/master/tp3/image2.png "texte pour le titre, facultatif")   
   1. Mettre en place le  plug-in Datepicker de JqueryUI disponible ici : http://jqueryui.com/datepicker/
      * Options disponibles pour ce plugin http://api.jqueryui.com/datepicker/
  
   2. Spécifier un format de saisie de la date "dd/mm/yy"
   3. Restreindre la saisie max de la date au jour courant (option maxdate)


