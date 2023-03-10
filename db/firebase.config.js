// firebase config setup
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDktgVt9eMcxaLB_9MYyDtOxyfSjMl426A",
    authDomain: "otrodelivery-test.firebaseapp.com",
    databaseURL: "https://otrodelivery-test-default-rtdb.firebaseio.com",
    projectId: "otrodelivery-test",
    storageBucket: "otrodelivery-test.appspot.com",
    messagingSenderId: "1052844705599",
    appId: "1:1052844705599:web:d404f8e3731f7b937df58a",
    measurementId: "G-FNW1B8L8PX",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
