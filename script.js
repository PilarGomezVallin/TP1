// Mostrar/ocultar párrafo
document.getElementById('mostrarOcultar').addEventListener('click', function() {
    let parrafo = document.getElementById('textoOculto');
    if (parrafo.style.display === 'none') {
        parrafo.style.display = 'block';
    } else {
        parrafo.style.display = 'none';
    }
});

// Contador
let contador = 0;
document.getElementById('aumentarContador').addEventListener('click', function() {
    contador++;
    document.getElementById('contador').textContent = contador;
});

document.getElementById('disminuirContador').addEventListener('click', function() {
    contador--;
    document.getElementById('contador').textContent = contador;
});