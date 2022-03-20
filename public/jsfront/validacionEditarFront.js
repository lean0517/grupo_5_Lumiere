window.addEventListener("load", function(){

    let formularioEditar = document.querySelector (".editar");

    formularioEditar.addEventListener ("submit", function(e){
        
        let errores =[]

        let campoNombreProducto= document.querySelector("#name");

        if(campoNombreProducto.value  == ""){
            errores.push ("El nombre del producto es obigatorio")
        }else if(campoNombreProducto.value.length<5) {
             errores.push ("El nombre del producto debe tener por lo menos 5 caracteres")
        }
        let campoDescripcionProducto= document.querySelector("#description")

        if(campoDescripcionProducto.value  == ""){
            errores.push ("La descripcion del producto es obigatorio")
        }else if(campoDescripcionProducto.value.length<20) {
            errores.push ("La descripcion del producto debe tener por lo menos 20 caracteres")
        };
        let campoPrecioProducto= document.querySelector("#price")    
        
        if(campoPrecioProducto.value  == ""){
            errores.push ("El precio del producto es obigatorio")
        }else if(campoPrecioProducto.value<1) {
            errores.push ("El precio debe ser mayor a 0 somos capitalistas no aceptamos que nuestros usuarios regalen cosas en nuestro sitio")
            
        };

        if (errores.length>0){
            e.preventDefault();

            let ulErrores = document.querySelector (".errores ");
            for (let i =0; i <errores.length; i++){
            
                
                ulErrores.innerHTML+= "<li>" + errores[i] + "</li>"
            
            }
            
        }
        
          
    });

})