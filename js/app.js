const btnEnviar = document.querySelector("#enviar")
const email = document.querySelector("#email")
const asunto = document.querySelector("#asunto")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector("#enviar-mail")
const er = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const btnReset = document.querySelector("#resetBtn")

cargarEventListeners()
function cargarEventListeners(){
    document.addEventListener("DOMContentLoaded",inicarApp)
    email.addEventListener("blur",validarFormulario)
    asunto.addEventListener("blur",validarFormulario)
    mensaje.addEventListener("blur",validarFormulario)
    formulario.addEventListener("submit",enviarEmail)
    btnReset.addEventListener("click",(e)=>{
        e.preventDefault()
        resetearFormulario()
    })
}

function inicarApp(){
    btnEnviar.disabled = true
    btnEnviar.classList.add("cursor-not-allow","opacity-50")
}

function validarFormulario(e){
    if(e.target.value.length > 0){
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

    if(er.test(email.value) && mensaje.value !== "" && asunto.value !== ""){
        btnEnviar.disabled  = false
        btnEnviar.classList.remove("cursor-not-allow","opacity-50")
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement("p")
    mensajeError.textContent = mensaje
    mensajeError.classList.add("border","border-red-500","background-red-100","text-red-500","p-3","mt-5","text-center","error")
    const errores = document.querySelectorAll(".error")
    if(errores.length === 0){
        formulario.appendChild(mensajeError)
    }
}

function enviarEmail(e){
    e.preventDefault()
    const spinner = document.querySelector("#spinner")
    spinner.style.display = "flex"
    setTimeout(()=>{
        spinner.style.display = "none"
        const parrafo = document.createElement("p")
        parrafo.textContent = "El mensaje se envio correctamente"
        parrafo.classList.add("text-center","my-10","p-2","bg-green-500","text-white","font-bold","uppercase")
        formulario.insertBefore(parrafo,spinner)
        setTimeout(()=>{
            parrafo.remove()
            resetearFormulario()
        },3000)
    },3000)
}

function resetearFormulario(){
    formulario.reset()
    inicarApp()
}