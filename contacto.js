document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;


    const name = document.getElementById('name').value.trim();
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').innerText = 'El nombre es obligatorio.';
    } else {
        document.getElementById('nameError').innerText = '';
    }

    const email = document.getElementById('email').value.trim();
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').innerText = 'El correo electrónico es obligatorio.';
    } else {
        document.getElementById('emailError').innerText = '';
    }

    const reason = document.getElementById('razon').value;
    if (reason === '') {
        isValid = false;
        document.getElementById('razonError').innerText = 'Debe seleccionar un motivo de contacto.';
    } else {
        document.getElementById('razonError').innerText = '';
    }

    const message = document.getElementById('message').value.trim();
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').innerText = 'El mensaje es obligatorio.';
    } else {
        document.getElementById('messageError').innerText = '';
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
        isValid = false;
        document.getElementById('termsError').innerText = 'Debe aceptar los términos y condiciones.';
    } else {
        document.getElementById('termsError').innerText = '';
    }

    if (isValid) {
        alert('Formulario enviado con éxito.');

    }
});