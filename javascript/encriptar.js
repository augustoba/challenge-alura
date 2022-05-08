function encriptado() {

    var mensaje = document.getElementById("mensaje").value.toLowerCase();
    console.log(mensaje);

    var mCifradro = mensaje.replace(/e/img,"enter");
    var mCifradro = mCifradro.replace(/o/img,"ober");
    var mCifradro = mCifradro.replace(/i/img,"imes");
    var mCifradro = mCifradro.replace(/a/img,"ai");
    var mCifradro = mCifradro.replace(/u/img,"ufat");


// para no mostrar la imagen
    document.getElementById("imagen1").style.display = "none";
// para no mostrar el texto
    document.getElementById("texto1").style.display = "none";
// para mostrar el msj cifrado
    document.getElementById("texto2").innerHTML = mCifradro;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptado() {

    var mensaje = document.getElementById("mensaje").value.toLowerCase();
    console.log(mensaje);
    var mCifradro = mensaje.replace(/enter/img,"e");
    var mCifradro = mCifradro.replace(/ober/img,"o");
    var mCifradro = mCifradro.replace(/imes/img,"i");
    var mCifradro = mCifradro.replace(/ai/img,"a");
    var mCifradro = mCifradro.replace(/ufat/img,"u");


// para no mostrar la imagen
    document.getElementById("imagen1").style.display = "none";
// para no mostrar el texto
    document.getElementById("texto1").style.display = "none";
// para mostrar el msj cifrado
    document.getElementById("texto2").innerHTML = mCifradro;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar() {
    var copiado = document.querySelector("#texto2")
    copiado.select();
    document.execCommand("copy");

    alert("el mensaje fue copiado");
}