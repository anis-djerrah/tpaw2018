
$(document).ready(function () {
    console.log("DOM ready!");
    $("button").click(function (event) {
        event.preventDefault();
        if ($("#Inputnom").val() == ""
            || $("#inputprenom").val() == ""
            || $("#inputdatedenaissance").val() == ""
            || $("#inputAdresse").val() == ""
            || $("#InputEmail").val() == "") {
            alert("veuillez remplir tous les champs")
        } else {
            $('#myModal').modal("show");
            $(".modal-body").html('vous etes Mr '
            +$("#Inputnom ").val()+' '
            +$("#inputprenom ").val()
            +' et vous etes nés le '
            +$("#inputdatedenaissance").val()
            +' et vous habitez à   '+'<a href=https://www.google.fr/maps/@ target="_blank">localisez moi</a>'       
            +'<img src="map.png" width="330" height="300"/>'+'<br/>'
            
            
        
        
        );
        
        
            $('#myModal').modal("show")
        
           
        }
    });
});
