window.onload = function () {
    var titulo = document.getElementById('title');
    var hoy = new Date();
    titulo.textContent = "Hola Mundo son las ".concat(hoy.getHours(), ":").concat(hoy.getMinutes());
    alert('Hello mundo');
};

//just a comment
