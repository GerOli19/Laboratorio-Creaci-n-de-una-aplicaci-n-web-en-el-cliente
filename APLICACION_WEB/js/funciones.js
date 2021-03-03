$( document ).ready(function() {
    $("#formTamLetras").validate();
    $("#formBorrarParrafo").validate();
    
    $.validator.addMethod("mayorCero", function (value, element) {
        
        if(value.length > 0 && value > 0){
            return true;
        }else{
            $(element).val("");
            Swal.fire({
                title: 'Error!',
                text: 'El campo debe tener un valor numerico mayor a 0.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
            return false;
        }
      }, "El campo debe tener un valor numerico mayor a 0.");

      $.validator.addMethod("eliminarParrafo", function (value, element) {
        
        if(value.length > 0 && value > 0 && value <= 4){
            return true;
        }else{
            $(element).val("");
            Swal.fire({
                title: 'Error!',
                text: 'Debe seleccionar entre los parrafos del 1 al 4.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
            return false;
        }
      }, "Debe seleccionar entre los parrafos del 1 al 4.");
});

function colorTitulo(){

    Swal.fire({
        title: 'Listo!',
        text: 'Color del titulo Cambiado con Exito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

    let colorSeleccionado = $("[name=colorTitulo]:checked").val()
    $("#tituloPagina").css("color", colorSeleccionado);

}

function cambiarTamañoTexto(){

        let tamLetra = $("#tamLetra").val();
        tamLetra = parseInt(tamLetra);
         $("li.animate__animated").css("font-size", tamLetra);

         Swal.fire({
            title: 'Listo!',
            text: 'Tamaño cambiado con Exito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          
         

}

function validarInput(elemento, boton){

    if($(elemento).valid()){
        
        $("#"+boton).attr("disabled",false);

    }else{
        
        $("#"+boton).attr("disabled",true);

    }
}

function borrarParrafo(){

    let parrafoBorrar = $("#inpBorrarParrafo").val();
    parrafoBorrar = parseInt(parrafoBorrar);

    switch (parrafoBorrar) {
        case 1:
            if($("#parrafoUno").text().length == 0){

                Swal.fire({
                    title: 'Error!',
                    text: 'El parrafo #'+parrafoBorrar+' ya fue borrado con anterioridad',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                  });

            }else{
                
                $("#parrafoUno").text('');
            }
            break;
        case 2:
            if($("#parrafoDos").text().length == 0){

                Swal.fire({
                    title: 'Error!',
                    text: 'El parrafo #'+parrafoBorrar+' ya fue borrado con anterioridad',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                  });

            }else{
                $("#parrafoDos").text('');
            }
            break;
        case 3:
            if($("#parrafoTres").text().length == 0){

                Swal.fire({
                    title: 'Error!',
                    text: 'El parrafo #'+parrafoBorrar+' ya fue borrado con anterioridad',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                  });

            }else{

                $("#parrafoTres").text('');
            
            }
            break;
        case 4:
            if($("#parrafoCuatro").text().length == 0){

                Swal.fire({
                    title: 'Error!',
                    text: 'El parrafo #'+parrafoBorrar+' ya fue borrado con anterioridad',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                  });

            }else{

                $("#parrafoCuatro").text('');
                
            }
            
            break;

    }
}