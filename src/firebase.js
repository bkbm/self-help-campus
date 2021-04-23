import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWCXfwYpcRWKD2RioxNrzAxgqViPwfmdw",
    authDomain: "self-help-campus.firebaseapp.com",
    projectId: "self-help-campus",
    storageBucket: "self-help-campus.appspot.com",
    messagingSenderId: "871130844880",
    appId: "1:871130844880:web:22f1e313a3d0abe54dd8d5",
    measurementId: "G-PH6ZMWP64S",
};

firebase.initializeApp(firebaseConfig);

//utils
const db = firebase.firestore();
const auth = firebase.auth();

const todosCollection = db.collection("todos");
const usersCollection = db.collection("users");

export { db, auth, todosCollection, usersCollection };
