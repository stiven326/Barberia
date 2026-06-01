import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYN9z306DqDM3dp7AlWVh2DvEx3V1Nw2o",
    authDomain:
    "barberia-52e78.firebaseapp.com",
    projectId:
    "barberia-52e78",
    storageBucket:
    "barberia-52e78.firebasestorage.app",
    messagingSenderId:
    "532402785734",
    appId:
    "1:532402785734:web:0a6f53199647554fdc36c7",
    measurementId:
    "G-C92QHZ07DC"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const provider =
new GoogleAuthProvider();

window.loginGoogle = async () => {

    const googleBtn =
    document.querySelector(".google-btn");

    try {
        googleBtn.disabled = true;

        const result =
        await signInWithPopup(
            auth,
            provider
        );

        const user =
        result.user;

        mostrarUsuario(user);

        alert(
            `Bienvenido ${user.displayName}`
        );

    }catch (error) {
        console.error(error);

        alert(
            "Error: "
            + error.code
        );

    }
    finally {

        googleBtn.disabled = false;

    }

};

window.logoutGoogle = async () => {
    try {

        await signOut(auth);

        const userInfo =
        document.getElementById(
            "userInfo"
        );

        if(userInfo){

            userInfo.innerHTML = "";

        }alert(
            "Sesión cerrada"
        );

    }catch(error){

        console.error(error);

    }

};

function mostrarUsuario(user){

    const userInfo =
    document.getElementById(
        "userInfo"
    );

    if(!userInfo) return;

    userInfo.innerHTML = `

        <div
        style="
        display:flex;
        align-items:center;
        gap:10px;
        ">

            <img
            src="${user.photoURL}"
            alt="${user.displayName}"
            width="40"
            height="40"
            style="
            border-radius:50%;
            object-fit:cover;
            ">

            <span>

                ${user.displayName}

            </span>

            <button
            onclick="logoutGoogle()">

                Salir

            </button>

    </div>
`;

}

onAuthStateChanged(
    auth,
    (user) => {
        if(user){
        mostrarUsuario(user);

        }

    }
);