

window.addEventListener("load", function(){

    let formularioCrear = document.querySelector (".pepito");

    formularioCrear.addEventListener ("submit", function(e){
        
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
            
        }
        let campoImagenProducto= document.querySelector("#image")

        //  let extencionesValidas = ['.jpg', 'jpeg', 'png' ];

        
        if (campoImagenProducto.value == ""){
            errores.push ('Tienes que subir una imagen');
            // campoImagenProducto.style.border = '4px #c51244 solid'

        // }else{
        //     let extencionArchivo = path.extname(file.originalname);
        //     if (!extencionesValidas.includes(extencionArchivo)) {
        //         errores.push (`Las extensiones validas son ${extencionesValidas.join(', ')}`)
        //     }
        }
        
        // let campoImagenProducto= document.querySelector(".image")
        
        // const jpg_jpeg = new RegExp(/\.jpe?g/i)
        // const png = new RegExp(/\.png/i)
        // const gif = new RegExp(/\.gif/i)

        // if(campoImagenProducto !==""){
        //     if (!((jpg_jpeg.test(campoImagenProducto.value)) || (gif.test(campoImagenProducto.value)) || (png.test(campoImagenProducto.value)))){
        //         errores.push("Los formatos validos son jpg, jpeg, png y gif")
        //     }
        // }

        if (errores.length>0){
            e.preventDefault();

            let ulErrores = document.querySelector (".errores ");
            for (let i =0; i <errores.length; i++){
            
                
                ulErrores.innerHTML+= "<li>" + errores[i] + "</li>"
            
            }
            
        }
        
          
    });
    
    
}
)