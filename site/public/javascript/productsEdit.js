window.addEventListener("load", function(){

    let formularioEdicion = document.querySelector("form.editProduct");

    let pNombre = document.querySelector(".pNombre");
    let pDescripcion = document.querySelector(".pDescripcion");
    let pCategoria = document.querySelector(".pCategoria");
    let pSubcategoria = document.querySelector(".pSubcategoria");
    let pMarca = document.querySelector(".pMarca");
    let pPrecio = document.querySelector(".pPrecio");
    let pImages = document.querySelector(".pImages");
    let pStock = document.querySelector(".pStock");

    let errores = [];
    
    let campoNombre = document.querySelector("input#nombre");
    let campoDescripcion = document.querySelector("input#descripcion");
    let campoCategoria = document.querySelector("input#categoria");
    let campoSubcategoria = document.querySelector("input#subcategoria");
    let campoMarca = document.querySelector("input#marca");
    let campoPrecio = document.querySelector("input#precio");
    let campoImages = document.querySelector("input#images");
        var filePath = campoImages.value;
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let campoStock = document.querySelector("input#stock");

    //let botonBorrar = document.querySelector("button#borrarProducto");



    formularioEdicion.addEventListener("submit", function(evento){


        if(campoNombre.value.length<5){
            console.log("nombre")
            pNombre.style.display="inline";
            pNombre.innerHTML="El nombre debe tener al menos 5 caracteres";
            errores.push("nombre");
            }else{
                pNombre.style.display="none";
            }

        if(campoDescripcion.value.length<20){
            console.log("desc")
            pDescripcion.style.display="inline";
            pDescripcion.innerHTML="La descripcion debe tener al menos 20 caracteres";
            errores.push("descripcion");
            }else{
                pDescripcion.style.display="none";
            }

        if(campoCategoria.value == ""){
            console.log("catg")
            pCategoria.style.display="inline";
            pCategoria.innerHTML="El campo categoría no debe estar vacío";
            errores.push("categoria");
            }else{
                pCategoria.style.display="none";
            }

        if(campoSubcategoria.value == ""){
            console.log("sub")
            pSubcategoria.style.display="inline";
            pSubcategoria.innerHTML="El campo subcategoría no debe estar vacío";
            errores.push("subcategoria");
            }else{
                pSubcategoria.style.display="none";
            }

        if(campoMarca.value == ""){
            console.log("marca")
            pMarca.style.display="inline";
            pMarca.innerHTML="El campo marca no debe estar vacío";
            errores.push("marca");
            }else{
                pMarca.style.display="none";
            }

        if(campoPrecio.value == "" || campoPrecio.value < 0){
            console.log("precio")
            pPrecio.style.display="inline";
            pPrecio.innerHTML="El precio debe ser un número positivo";
            errores.push("precio");
            }else{
                pPrecio.style.display="none";
            }


        if(campoImages.value == undefined ||campoImages.value == ""  ){
            console.log(campoImages.value)
            if(!allowedExtensions.exec(filePath)){
                console.log(filePath)
                console.log("images")
                pImages.style.display="inline";
                pImages.innerHTML="Debe subir 3 imágenes con extensión .jpg, .jpeg, .png o .gif";

                errores.push("images");
                }
            }else{
                pImage.style.display="none";
            }

        if(campoStock.value == "" || campoStock.value < 0){
            console.log("stock")
            pStock.style.display="inline";
            pStock.innerHTML="El Stock debe ser un número positivo";
            errores.push("Stock");
            }else{
                pStock.style.display="none";
            }

        if(errores.length > 0){
            evento.preventDefault();
            }

        });

    // botonBorrar.addEventListener("reset", function(){
    //     console.log('hiciste doble click')
    //     pNombre.style.display="none";
    //     pDescripcion.style.display="none";
    //     pCategoria.style.display="none";
    //     pSubcategoria.style.display="none";
    //     pMarca.style.display="none";
    //     pPrecio.style.display="none";
    //     pImages.style.display="none";
    //     pStock.style.display="none";
    // })
});
