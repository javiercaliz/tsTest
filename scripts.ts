window.onload = function () {
    var titulo = document.getElementById('title');
    var hoy = new Date();
    titulo.textContent = `Hola Mundo son las ${hoy.getHours()}:${hoy.getMinutes()}`;
    alert('Hello mundo');
};

