import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW_8-KkNEit_jb7HC5aUDDR669Xca-F9c",
  authDomain: "mern-estate-12503.firebaseapp.com",
  projectId: "mern-estate-12503",
  storageBucket: "mern-estate-12503.appspot.com",
  messagingSenderId: "1074671700340",
  appId: "1:1074671700340:web:cdec3cc93817df6e374421",
  measurementId: "G-LHVJWSLJF4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);