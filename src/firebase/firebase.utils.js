import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZVsxqjdtIuzaF5WEQwDkIjxXNiM_M7oM",
    authDomain: "crown-db-ff6fb.firebaseapp.com",
    databaseURL: "https://crown-db-ff6fb.firebaseio.com",
    projectId: "crown-db-ff6fb",
    storageBucket: "",
    messagingSenderId: "676001565370",
    appId: "1:676001565370:web:ced56c5e37c63067399083"
};    

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;