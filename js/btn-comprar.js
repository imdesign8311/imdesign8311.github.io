
let hora = new Date;
console.log(hora.getHours());

function buenasDTN(){
    let saludo = "";
    if(hora.getHours() < 24){
        saludo = "Buenos noches, ";
    }
    if(hora.getHours() < 19){
        saludo = "Buenos tardes, ";
    }
    if(hora.getHours() < 12){
        saludo = "Buenos dias, ";
    }
    return saludo;
}

document.addEventListener("click", e => {
    if(e.target.matches("[data-boton]")){
        // console.log(e.target.id)
        let url = "https://api.whatsapp.com/send?phone=593967400303&text="  + "%0AMensaje: " + buenasDTN() + "deso comprar el producto " + e.target.id + "%0A";
        window.open(url, "Enviar");
    }
});