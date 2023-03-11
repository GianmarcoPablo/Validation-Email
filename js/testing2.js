// const btnEnviar = document.querySelector("#enviar")
// const email = document.querySelector("#email")
// const asunto = document.querySelector("#asunto")
// const mensaje = document.querySelector("#mensaje")
// const formulario = document.querySelector("#enviar-mail")
// const er = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



// eventListener()
// function eventListener(){
//     document.addEventListener("DOMContentLoaded",inicarApp)
//     email.addEventListener("blur", validarFormulario)
//     asunto.addEventListener("blur", validarFormulario)
//     mensaje.addEventListener("blur", validarFormulario)
// }

// function inicarApp(){
//     btnEnviar.disabled = true
//     btnEnviar.classList.add("cursor-not-allow","opacity-50")
// }

// function validarFormulario(e){
//     if(e.target.value.length > 0){
//         const error = document.querySelector(".error")
//         if(error){
//             error.remove()
//         }
//         e.target.classList.remove("border","border-red-500")
//         e.target.classList.add("border","border-green-500")
//     }else{
//         e.target.classList.remove("border","border-green-500")
//         e.target.classList.add("border","border-red-500")
//         mensajeError("Todos los campos son obligatorios")
//     }
//     if(e.target.type === "email"){
//         if(er.test(e.target.value)){
//             const error = document.querySelector(".error")
//             if(error){
//                 error.remove()
//             }
//         }else{
//             e.target.classList.remove("border","border-green-500")
//             e.target.classList.add("border","border-red-500")
//             mostrarError("Email no valido")
//         }
//     }
//     if(!er.test(e.target.value) === "" && !asunto.value === "" && !mensaje.value === ""){
//         btnEnviar.classList.remove("cursor-not-allow","opacity-50")
//     }
// }


// function mensajeError(mensaje){
//     const mensajeError = document.createElement("p")
//     mensajeError.textContent = mensaje
//     mensajeError.classList.add("border","border-red-500","bg-red-100","text-red-500","p-3","text-center","mt-5","error")

//     const errores = document.querySelectorAll(".error")
//     if(errores.length === 0){
//         formulario.appendChild(mensajeError)
//     }
// }