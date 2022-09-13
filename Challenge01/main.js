var campoEntrada= document.querySelector(".entrada");
var btnEncriptar= document.querySelector(".encriptar");
var btnDesencriptar= document.querySelector(".desencriptar");
var campoSalida=document.querySelector(".textarea");
var muneco=document.querySelector(".muneco");
var tituloDisplay=document.querySelector(".titulo-display");
var copiar=document.querySelector(".copiar");

// Seleccionamos los elementos del DOM que vamos a manipular
var smsSalida;
// Almacenara el mensaje de salida del programa




btnEncriptar.onclick=mostrarEncriptado;
btnDesencriptar.onclick=mostrarDesencriptado;
// Ejecuta la función al hacer click


function mostrarEncriptado() {
    if(campoEntrada.value!=""){
        
        tituloDisplay.style.display="none";
        muneco.style.display="none";
        copiar.style.display="";
        //Nos elimina la imagen en el display y nos muestra el botón copiar

        smsSalida= campoEntrada.value.replaceAll("e","enter").replaceAll("o","ober").replaceAll("i","imes").replaceAll("a","ai").replaceAll("u","ufat");
        //Se reemplazan las letras del mensaje original

        campoSalida.innerHTML=smsSalida;
        // Se muestra el mensaje final 

        campoSalida.classList.add("textareaModif");
        // Agregamos una clase al campo de salida que se ajuste a como queremos desplegarlo 

        copiar.innerHTML="copiar"
        // Se escribe el texto copiar en el botón de copiar
        

    }else{
        alert("Por favor digite un mensaje en el campo...");
    }
}

function mostrarDesencriptado(){
    if(campoEntrada.value!=""){

        tituloDisplay.style.display="none";
        muneco.style.display="none";
        copiar.style.display="";
        smsSalida= campoEntrada.value.replaceAll("enter","e").replaceAll("ober","o").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ufat","u");
        campoSalida.innerHTML=smsSalida;
        campoSalida.classList.add("textareaModif");
        copiar.innerHTML="copiar"

        //Mismo comportamiento que la función anterior pero con ingeniería inversa para desencriptar
    }else{
        alert("Por favor digite un mensaje para ser desencriptado...");
    }
    
}

copiar.addEventListener("click", function(){
    campoSalida.focus();
    document.execCommand('selectAll');
    // Selecciona el texto en el campo de salida

    document.execCommand('copy');
    //Se copia el texto seleccionado
    
    copiar.innerHTML="¡Mensaje Copiado!"
    //Cambiamos el texto en el botón copiar
    



});



