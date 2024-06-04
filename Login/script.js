// Sign up and sign in

const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const containerFormRegister = document.querySelector(".register");
const containerFormLogin = document.querySelector(".login");

btnSignIn.addEventListener('click',()=>{
    containerFormRegister.classList.add('hide')
    containerFormLogin.classList.remove('hide')
});

btnSignUp.addEventListener('click',()=>{
    containerFormRegister.classList.remove('hide')
    containerFormLogin.classList.add('hide')
});

// Alerts, errors and messages

const formRegister = document.querySelector(".form-register"),
    inputUser = document.querySelector('.form-register input[type="text"]'),
    inputPass = document.querySelector('.form-register input[type="password"]'),
    inputEmail = document.querySelector('.form-register input[type="email"]'),
    alertaError = document.querySelector(".form-register .alerta-error"),
    alertaExito = document.querySelector(".form-register .alerta-exito");

const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/,
    emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    passwordRegex = /^.{4,12}$/;

const estadoValidacionCampos = {
    userName: false,
    userEmail: false,
    userPassword: false,
};

 document.addEventListener("DOMContentLoaded", () => {
    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        enviarFormulario();
    });

    inputUser.addEventListener("input", () => {
        validarCampo(userNameRegex,inputUser,"El usuario tiene que ser de 4 a 16 dígitos y solo puede contener, letras y guión bajo.");
    });

    inputEmail.addEventListener("input", () => {
        validarCampo(emailRegex,inputEmail,"El correo solo puede contener letras, números, puntos, guiones y guíon bajo.");
    });

    inputPass.addEventListener("input", () => {
        validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 4 a 12 dígitos");
    });
});

function validarCampo(regularExpresion, campo, mensaje) {
    const validarCampo= regularExpresion.test(campo.value);
    if (validarCampo) {
        eliminarAlerta(campo.parentElement.parentElement);
        estadoValidacionCampos[campo.name] = true;
        campo.parentElement.classList.remove("error");
        return;
    }
    estadoValidacionCampos[campo.name] = false;
    campo.parentElement.classList.add("error");
    mostrarAlerta(campo.parentElement.parentElement,mensaje);
}

function mostrarAlerta(referencia,mensaje) {
    eliminarAlerta(referencia);
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta");
    alertaDiv.textContent = mensaje;
    referencia.appendChild(alertaDiv);
}

function eliminarAlerta(referencia) {
    const alerta = referencia.querySelector(".alerta");
    if (alerta) alerta.remove();
}

function enviarFormulario() {
    if (estadoValidacionCampos.userName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword) {
        estadoValidacionCampos.userName = false;
        estadoValidacionCampos.userEmail = false;
        estadoValidacionCampos.userPassword = false;    
        formRegister.reset();
        alertaExito.classList.add("alertaExito");
        alertaError.classList.remove("alertaError");
        setTimeout(() => {
          alertaExito.classList.remove("alertaExito");
        }, 3000); 
        return;
    }

    alertaExito.classList.remove("alertaExito");
    alertaError.classList.add("alertaError");
    setTimeout(() => {
        alertaError.classList.remove("alertaError");
    }, 3000);
}