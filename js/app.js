window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    loader.style.display = "none";

});

window.addEventListener("scroll", () => {
    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("navbar-scroll");

    }else{

        navbar.classList.remove("navbar-scroll");

    }

});

const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    if(email === "" || password === ""){

        mostrarNotificacion(
            "Completa todos los campos ❌"
        );

        return;

    }

    mostrarNotificacion(
        "Inicio de sesión exitoso ✂️"
    );

    loginForm.reset();

});

const formReserva =
document.getElementById("formReserva");

const listaReservas =
document.getElementById("listaReservas");

let reservas =
JSON.parse(localStorage.getItem("reservas")) || [];

mostrarReservas();

formReserva.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value;

    const telefono =
    document.getElementById("telefono").value;

    const servicio =
    document.getElementById("servicio").value;

    const fecha =
    document.getElementById("fecha").value;

    const hora =
    document.getElementById("hora").value;


    const reserva = {

        id: Date.now(),

        nombre,
        telefono,
        servicio,
        fecha,
        hora

    };

    reservas.push(reserva);

    guardarStorage();

    mostrarReservas();

    mostrarNotificacion(
        "Reserva realizada ✅"
    );

    formReserva.reset();

});

function guardarStorage(){

    localStorage.setItem(
        "reservas",
        JSON.stringify(reservas)
    );

}

function mostrarReservas(){

    listaReservas.innerHTML = "";


    if(reservas.length === 0){

        listaReservas.innerHTML = `

            <p style="
                text-align:center;
                color:#999;
            ">

                No hay reservas todavía

            </p>

        `;

        return;

    }

reservas.forEach((reserva) => {
        listaReservas.innerHTML += `
            <div class="card-reserva">

                <h3>${reserva.nombre}</h3>
                <p>📞 ${reserva.telefono}</p>
                <p>✂️ ${reserva.servicio}</p>
                <p>📅 ${reserva.fecha}</p>
                <p>⏰ ${reserva.hora}</p>

                <button onclick="eliminarReserva(${reserva.id})">Eliminar</button>

            </div>
        `;

    });

}

function eliminarReserva(id){

    reservas =
    reservas.filter(
        reserva => reserva.id !== id
    );

    guardarStorage();
    mostrarReservas();
    mostrarNotificacion("Reserva eliminada ❌");

}

function mostrarNotificacion(texto){
    const notificacion =
    document.createElement("div");

    notificacion.classList.add(
        "notificacion"
    );

    notificacion.textContent = texto;
    document.body.appendChild(
        notificacion
    );

    setTimeout(() => {

        notificacion.classList.add(
            "show"
        );
    }, 100);

    setTimeout(() => {

        notificacion.remove();

    }, 3000);

}

const chatToggle =
document.getElementById("chatToggle");

const chatBox =
document.getElementById("chatBox");

const sendBtn =
document.getElementById("sendBtn");

const userInput =
document.getElementById("userInput");

const chatMessages =
document.getElementById("chatMessages");

chatToggle.addEventListener("click", () => {

    if(chatBox.style.display === "flex"){

        chatBox.style.display = "none";

    }else{

        chatBox.style.display = "flex";

    }

});

sendBtn.addEventListener(
    "click",
    sendMessage
);

userInput.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            sendMessage();

        }

    }
);

function sendMessage(){
    const texto =
    userInput.value.trim();

    if(texto === "") return;

    agregarMensaje(
        texto,
        "user-message"
    );

    const textoLower =
    texto.toLowerCase();


    let respuesta = "";
    if(
        textoLower.includes("hola")
    ){

        respuesta ="Hola 👋 Bienvenido a Barbería Premium";

    }

    else if(
        textoLower.includes("precio")
    ){

        respuesta = "Nuestros servicios van desde $15.000 hasta $45.000 ✂️";

    }

    else if(
        textoLower.includes("fade")
    ){

        respuesta = "El corte Fade cuesta $20.000 🔥";

    }

    else if(
        textoLower.includes("barba")
    ){

        respuesta = "El servicio de barba cuesta $30.000 ✂️";

    }

    else if(
        textoLower.includes("hora")
    ){

        respuesta = "Abrimos de 9:00 AM a 8:00 PM 🕒";

    }

    else if(
        textoLower.includes("ubicacion")
    ){

        respuesta = "Estamos ubicados en Bogotá 📍";

    }

    else if(
        textoLower.includes("reserva")
    ){

        respuesta = "Puedes reservar en la sección de reservas 👌";

    }

    else if(
        textoLower.includes("gracias")
    ){

        respuesta = "Gracias a ti por visitarnos 🔥";

    }

    else{

        respuesta = "No entendí tu mensaje 😅";

    }


    setTimeout(() => {

        agregarMensaje(
            respuesta,
            "bot-message"
        );

    }, 500);


    userInput.value = "";

}

function agregarMensaje(
    texto,
    clase
){

    const mensaje =
    document.createElement("div");

    mensaje.classList.add(clase);

    mensaje.textContent = texto;

    chatMessages.appendChild(
        mensaje
    );

    chatMessages.scrollTop =
    chatMessages.scrollHeight;

}

const cards =
document.querySelectorAll(
    ".card"
);

window.addEventListener("scroll", () => {

    cards.forEach((card) => {

const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0px)";

        }

    });

});

cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(50px)";

    card.style.transition =
    "0.6s";

});