const body = document.body;
const originalBackgroundColor = window.getComputedStyle(body).backgroundColor;
const newBackgroundColor = '#ca7190'; // Color nuevo

let isOriginalColor = true; // Variable para rastrear el color actual

document.getElementById('cambiarFondo').addEventListener('click', function() {
    if (isOriginalColor) {
        body.style.backgroundColor = newBackgroundColor;
    } else {
        body.style.backgroundColor = originalBackgroundColor;
    }
    isOriginalColor = !isOriginalColor; // Invierte el valor de la variable
});