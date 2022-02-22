let btnSendMesagge = document.getElementById("send-mesagge");
let formWhatsapp = document.getElementById("form-Whatsapp");
let nombre = document.getElementById("sendName");
let mensaje = document.getElementById("sendText");
// formWhatsapp.preventDefault();
console.log(btnSendMesagge, nombre, mensaje);

let hora = new Date;
console.log(hora.getHours());

function buenasDTN(){
    let saludo = "";
    if(hora.getHours() < 24){
        saludo = "Buenos noches, le saluda ";
    }
    if(hora.getHours() < 19){
        saludo = "Buenos tardes, le saluda ";
    }
    if(hora.getHours() < 12){
        saludo = "Buenos dias, le saluda ";
    }
    return saludo;
}

document.addEventListener("click", e => {
    if(e.target === btnSendMesagge){
        if(nombre.value !== "" &&  mensaje.value !== ""){
            e.preventDefault();
            let url = "https://api.whatsapp.com/send?phone=593967400303&text=" + buenasDTN() + nombre.value + "." + "%0AMensaje: " + mensaje.value + "%0A";
            window.open(url, "Enviar");
        }
        
    }
})

