// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" ;
const firebaseConfig = {
    apiKey: "AIzaSyDvaEsHugxRmy9afxN55kvuDrrlxnZv20s",
    authDomain: "wow-connect-8ed8b.firebaseapp.com",
    projectId: "wow-connect-8ed8b",
    storageBucket: "wow-connect-8ed8b.appspot.com",
    messagingSenderId: "967605278456",
    appId: "1:967605278456:web:469cc7a7a07ed4d341cd0d",
    measurementId: "G-63SX41NP8V"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
