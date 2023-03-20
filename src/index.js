import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importacion de firebase 
import { initializeApp } from "firebase/app";

// Configuracion de firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSd60sDYtrUXnT8rkp87Nbo_qmQ9Sm_JA",
    authDomain: "drop-store-ramos-facundo.firebaseapp.com",
    projectId: "drop-store-ramos-facundo",
    storageBucket: "drop-store-ramos-facundo.appspot.com",
    messagingSenderId: "366076908695",
    appId: "1:366076908695:web:00473cc10508058274c5d2"
};

// Inicializacion de firebase mediante funcion
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <React.StrictMode> */
    <App />
/*   </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
