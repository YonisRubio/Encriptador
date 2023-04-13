function evaluar(text) {
    if (text === "" || /[A-Z]/.test(text)) {
        return false
    }
    else return true
}

function encriptar(tex){
    var tex = tex.replace(/e/g, "enter")
    var tex = tex.replace(/i/g, "imes")
    var tex = tex.replace(/a/g, "ai")
    var tex = tex.replace(/o/g, "ober")
    var tex = tex.replace(/u/g, "ufat")
    return tex
}

function descriptar(tex){
    var tex = tex.replace(/enter/g, "e")
    var tex = tex.replace(/imes/g, "i")
    var tex = tex.replace(/ai/g, "a")
    var tex = tex.replace(/ober/g, "o")
    var tex = tex.replace(/ufat/g, "u")
    return tex
}

function aletar(){
    alert("hola")
}

const textoUser = document.getElementById("textoUsuario");
const mostrarTexto =  document.getElementById("label")
const miBotonEncriptar = document.getElementById("encrip");
const miBotonDesencriptar = document.getElementById("desencrip")
const miBotonCopiar = document.getElementById("copiar")


miBotonEncriptar.addEventListener("click", function () { 
    if (evaluar(textoUser.value)) {
        let resultado = encriptar(textoUser.value);
        mostrarTexto.innerHTML = resultado
    }
    else {
        mostrarTexto.innerHTML = "El texto esta vacio o tiene alguna mayuscula"
    }
});

miBotonDesencriptar.addEventListener("click", function () { 
    if (evaluar(textoUser.value)) {
        let resultado = descriptar(textoUser.value);
        mostrarTexto.innerHTML = resultado
    }
    else {
        mostrarTexto.innerHTML = "El texto esta vacio o tiene alguna mayuscula"
    }
    
});

miBotonCopiar.addEventListener("click", function () { 
    navigator.clipboard.writeText(mostrarTexto.innerHTML);
});

