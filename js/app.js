const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(email === "" || password === ""){
        alert("Completa todos los campos");
        return;
    }

    alert("Inicio de sesión exitoso ✂️");
    loginForm.reset();
});

const formReserva = document.getElementById("formReserva");
const mensaje = document.getElementById("mensaje");
const listaReservas = document.getElementById("listaReservas");
let reservas = [];

formReserva.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

const reserva = {
        nombre,
        telefono,
        servicio,
        fecha,
        hora
    };

    reservas.push(reserva);
    mostrarReservas();
    mensaje.innerHTML = `
        Reserva confirmada ✅
    `;

    formReserva.reset();
});

function mostrarReservas(){
    listaReservas.innerHTML = "";
    reservas.forEach((reserva) => {
        listaReservas.innerHTML += `
            <div class="card-reserva">
                <h3>${reserva.nombre}</h3>
                <p>Servicio: ${reserva.servicio}</p>
                <p>Fecha: ${reserva.fecha}</p>
                <p>Hora: ${reserva.hora}</p>
                <p>Teléfono: ${reserva.telefono}</p>

            </div>
        `;
    });

}