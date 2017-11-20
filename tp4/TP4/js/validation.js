    function validation (){

        if ($("#name").val() == ""
            || $("#firstname").val() == ""
            || $("#birth").val() == ""
            || $("#adresse").val() == ""
            || $("#mail").val() == "") {
            alert("veuillez remplir tous les champs")
        } else {
            $('#myModal').modal("show");
            $(".modal-body").html('vous etes '
            +$("#name ").val()+' '
            +$("#firstname").val()
            +' et vous etes nés le '
            +$("#birth").val()
            +' et vous habitez à '+$("#adresse").val()
            +'<br/>'
            +"<img src='https://maps.googleapis.com/maps/api/staticmap?center="
            +$("#adresse").val() 
            +"&markers="
            +$("#adresse").val()
            +"&size=300x300'/>"); 

            $('#myModal').modal("show")



            
  
        }
    };