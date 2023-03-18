const btnEnviar = document.querySelector("#enviar")
const email = document.querySelector("#email")
const asunto = document.querySelector("#asunto")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector("#enviar-mail")
const er = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const btnReset = document.querySelector("#resetBtn")


cargarEventListeners()
function cargarEventListeners(){
    document.addEventListener("DOMContentLoaded",iniciarApp)
    email.addEventListener("blur",validarFormulario)
    asunto.addEventListener("blur",validarFormulario)
    mensaje.addEventListener("blur",validarFormulario)
    formulario.addEventListener("submit",enviarEmail)
    btnReset.addEventListener("click",function(e){
        e.preventDefault()
        resetearFormulario()
    })
}

function iniciarApp(){
    btnEnviar.disabled = true
    btnEnviar.classList.add("cursor-not-allow","opacity-50")
}

function validarFormulario(e){
    if(e.target.value.length > 1){
        const error = document.querySelector(".error")
        if(error){
            error.remove()
        }
        e.target.classList.remove("border","border-red-500")
        e.target.classList.add("border","border-green-500")
    }else{
        e.target.classList.remove("border","border-green-500")
        e.target.classList.add("border","border-red-500")
        mostrarError("Todos los campos son obligatorios")
    }
    if(e.target.type === "email"){
        if(er.test(e.target.value)){
            const error = document.querySelector(".error")
            if(error){
                error.remove()
            }
            e.target.classList.remove("border","border-red-500")
            e.target.classList.add("border","border-green-500")
        }else{
            e.target.classList.remove("border","border-green-500")
            e.target.classList.add("border","border-red-500")
            mostrarError("Email no valido")
        }
    }

    if(er.test(email.value) && asunto.value !== "" && mensaje.value !== ""){
        btnEnviar.disabled = false
        btnEnviar.classList.remove("cursor-not-allow","opacity-50")
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement("p")
    mensajeError.textContent = mensaje
    mensajeError.classList.add("border","border-red-500","bg-red-300","text-black","p-3","text-center","mt-5","error","font-bold","uppercase")
    const errores = document.querySelectorAll(".error")
    if(errores.length === 0){
        formulario.appendChild(mensajeError)
    }
}

function enviarEmail(e){
    e.preventDefault()
    const spinner = document.querySelector("#spinner")
    spinner.style.display = "flex"

    setTimeout(() => {
        spinner.style.display = "none"
        const parrafo = document.createElement("p")
        parrafo.textContent = "Mensaje Enviado Correctamente"
        parrafo.classList.add("border","border-green-500","bg-green-300","text-black","p-3","text-center","mt-5","error","font-bold","uppercase")
        formulario.appendChild(parrafo)
        setTimeout(() => {
            parrafo.remove()
            resetearFormulario()
        }, 3000);
    }, 3000);
    
}

function resetearFormulario(){
    formulario.reset()
    iniciarApp()
}