   //Expresión para validar un correo electrónico
        var refCorreo=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        //Expresión para validar solo texto
         var regex = /([0-9]+)/;

$(document).ready(function(){
    
    $("#bEnviar").click(function(){
        //Guardar en variables el valor que tengan las cajas de texto
        //Por medio de los id's
        //Y tener mejor manipulación de dichos valores
        var nombre = $("#name");
        var apellido = $("#lastname");
        var correo = $("#input-email").val();
        var inputPassword = $("#input-password").val();

        // --- Condicionales anidados ----
     
        if(nombre.val() == "" ||regex.test(nombre.val())){
            $("#mensaje1").fadeIn("slow");
                    
            }else{
                 $("#mensaje1").fadeOut("slow");
            }
        
         if(apellido.val() == "" ||regex.test(apellido.val())){
            $("#mensaje2").fadeIn("slow");
                    
            }else{
                 $("#mensaje2").fadeOut("slow");
            }
         if(correo == "" ||!refCorreo.test(correo)){
            $("#mensaje3").slideDown("slow");
                    
             
            }else{
                 $("#mensaje3").fadeOut("slow");
            }
        if (inputPassword=="123456"||inputPassword=="098754"||inputPassword=="password"){
            $("#mensaje4").slideDown("slow");
                    
            }else{
                 $("#mensaje4").fadeOut("slow");
            }

    });//click
});//ready