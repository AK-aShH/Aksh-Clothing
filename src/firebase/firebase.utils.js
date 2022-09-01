import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';  //firebase realtime NOSQL database 
import 'firebase/compat/auth'; //for authentication

const config = {
    apiKey: "AIzaSyDOGs_LfOGgvykmoItYesqwSlZSjS5jCIg",
    authDomain: "aksh-clothing-db.firebaseapp.com",
    projectId: "aksh-clothing-db",
    storageBucket: "aksh-clothing-db.appspot.com",
    messagingSenderId: "592869167102",
    appId: "1:592869167102:web:0a4392731c457e66c43aaf",
    measurementId: "G-Y261QEQ1G4"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // to use anything regarding authentication 
export const firestore = firebase.firestore(); // to use anything related to firestore

const provider = new firebase.auth.GoogleAuthProvider();  // access the googleauthprovider class from auth library which takes the a custom parameter to select account
provider.setCustomParameters({prompt: 'select_account'}); // to trigger google popup when ever sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider); // signinwithpopup takes the provider class for different types of sign in with google, fb, github

export default firebase;

// You need to configure your firebase console for sign in with google 
// You can check the documentation for it as well
// Now, all done, you just need to import the exported {signInWithGoogle} method from this file and use it in onclick event of sign in button
