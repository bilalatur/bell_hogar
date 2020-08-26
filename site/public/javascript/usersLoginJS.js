window.addEventListener("load", function(){
    let formulario = document.querySelector(".login-form")
    formulario.addEventListener("submit", function(e){
        let errores = [];

        let emailInput = document.getElementById("email");
        let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(emailInput.value == ""){
            errores.push("El email es obligatorio");
        } else if (regexEmail.test(emailInput.value) == false){
            errores.push("El email es inválido");
        }

        let passInput = document.getElementById("password");
        if(passInput.value == ""){
            errores.push("Ingrese su contraseña")
        } 

        if(errores.length > 0){
            e.preventDefault();
            let erroresList = document.querySelector(".ul-div-errores");
            for (let i = 0; i < errores.length; i++){
                erroresList.innerHTML += "<li>" + errores[i] + "</li>"
            }
            console.log(errores)
        }
    })
})