const password = document.getElementById("password");
const repitpassword = document.getElementById("repitpassword");
const form = document.getElementById("formulario");
const contrasenaDiv = document.querySelector(".contrasena");

form.addEventListener("submit", e => {
    if (password.value != repitpassword.value) {
        e.preventDefault();
        contrasenaDiv.classList.add("incorrecta");
    } else {
        contrasenaDiv.classList.remove("incorrecta");
    }
});