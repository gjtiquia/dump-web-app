import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5xmcDEgfS9zi2rJHrMl1ZbmPXYoIWDDI",
    authDomain: "dump-web-app.firebaseapp.com",
    projectId: "dump-web-app",
    storageBucket: "dump-web-app.appspot.com",
    messagingSenderId: "351346417051",
    appId: "1:351346417051:web:b9f51bc0206cef311ed53e",
    measurementId: "G-N4STS8J7RS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);