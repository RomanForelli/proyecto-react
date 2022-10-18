import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "proyectoreact-forelli.firebaseapp.com",
    projectId: "proyectoreact-forelli",
    storageBucket: "proyectoreact-forelli.appspot.com",
    messagingSenderId: "148221004813",
    appId: "1:148221004813:web:84b45c32dc1e5d73801944"
};
  // Initialize Firebase

const app = initializeApp(firebaseConfig);