import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBf-BzR5w1ZeUVS02pMNlnEirctf1KcPpc",
    authDomain: "reduxfirebase-afe0f.firebaseapp.com",
    projectId: "reduxfirebase-afe0f",
    storageBucket: "reduxfirebase-afe0f.appspot.com",
    messagingSenderId: "291086500252",
    appId: "1:291086500252:web:a88f576aaa7892d426c859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db,storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}

// file > storage > get download url -> firestore db














