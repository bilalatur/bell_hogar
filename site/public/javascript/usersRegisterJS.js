window.addEventListener("load", function(){
    let formulario = document.querySelector(".register-form")
    formulario.addEventListener("submit", function(e){
        let errores = [];

        let nombreInput = document.getElementById("nombre");
        if (nombreInput.value == ""){
            errores.push("El nombre es obligatorio")
        } else if (nombreInput.value.length < 3) {
            errores.push("El nombre debe tener más de dos caracteres")
        }

        let apellidoInput = document.getElementById("apellido");
        if (apellidoInput.value == ""){
            errores.push("El apellido es obligatorio")
        } else if (nombreInput.value.length < 3) {
            errores.push("El apellido debe tener más de dos caracteres")
        }

        let emailInput = document.getElementById("email");
        let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(emailInput.value == ""){
            errores.push("El email es obligatorio");
        } else if (regexEmail.test(emailInput.value) == false){
            errores.push("El email es inválido");
        }
       

        let passInput = document.getElementById("password");
        let checkMay = document.getElementById("checkMay")
        let timesMay = document.getElementById("timesMay")
        let checkMin = document.getElementById("checkMin")
        let timesMin = document.getElementById("timesMin")
        let checkNum = document.getElementById("checkNum")
        let timesNum = document.getElementById("timesNum")
        let mayus = /[A-Z]/;
        let minus = /[a-z]/;
        let num = /[0-9]/;
        let pMayus = document.querySelector(".pass-mayus")
        let pMin = document.querySelector(".pass-minus")
        let pNum = document.querySelector(".pass-num")
        if(passInput.value == ""){
            errores.push("La contraseña es obligatoria")
        } else if(passInput.value.length < 8){
            errores.push("La contraseña debe tener más de 8 caracteres")
        } 
        if(mayus.test(passInput.value)){
            pMayus.style.color = 'green';
            checkMay.style.display = 'inline';
            timesMay.style.display= 'none';
        } else {
            pMayus.style.color = 'red';
            timesMay.style.display= 'inline';
            checkMay.style.display = 'none';
        }
        if(minus.test(passInput.value)){
            pMin.style.color = 'green';
            checkMin.style.display = 'inline';
            timesMin.style.display= 'none';
        } else {
            pMin.style.color = 'red';
            timesMin.style.display= 'inline';
            checkMin.style.display = 'none';
        }
        if(num.test(passInput.value)){
            pNum.style.color = 'green';
            checkNum.style.display = 'inline';
            timesNum.style.display= 'none';
        } else {
            pNum.style.color = 'red';
            timesNum.style.display= 'inline';
            checkNum.style.display = 'none';
        }        
        
        var fileInput = document.getElementById('image');
        var filePath = fileInput.value;
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(Image.value != undefined){
            if(!allowedExtensions.exec(filePath)){
                errores.push("Debe subir una imagen con extensión .jpg, .jpeg, .png o .gif")
            }
        }

        if(errores.length > 0){
            e.preventDefault();
            let erroresList = document.querySelector(".ul-div-errores");
            for (let i = 0; i < errores.length; i++){
                erroresList.innerHTML += "<li>" + "-" + errores[i] + "</li>"
            }
        }
    })
})