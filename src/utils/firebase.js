import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCNBHkQaVC8IRepuw5nQ3OJT4Kj5D3CocA",
    authDomain: "f-output.firebaseapp.com",
    projectId: "f-output",
    storageBucket: "f-output.appspot.com",
    messagingSenderId: "501490098731",
    appId: "1:501490098731:web:93b109b5bdddfac0a3806e",
    measurementId: "G-QPW2TT5BZG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default firebase;