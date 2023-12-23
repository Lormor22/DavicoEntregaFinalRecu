
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBN2biNk8Le5yBNyGFOrrMvKIA5nZ6BuzY",
    authDomain: "entrega-final-davico.firebaseapp.com",
    projectId: "entrega-final-davico",
    storageBucket: "entrega-final-davico.appspot.com",
    messagingSenderId: "812952290389",
    appId: "1:812952290389:web:ddc909e6e331824bc9c0dc"
};


const app = initializeApp(firebaseConfig);  

export const db = getFirestore(app);