import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0XUiD6TBcOYFHuHDuZu1thbwAckp9Lqo",
    authDomain: "udemy-project-4d41b.firebaseapp.com",
    databaseURL: "https://udemy-project-4d41b.firebaseio.com",
    projectId: "udemy-project-4d41b",
    storageBucket: "udemy-project-4d41b.appspot.com",
    messagingSenderId: "314762643797",
    appId: "1:314762643797:web:9656d31524373aa70b07dc",
    measurementId: "G-6NJ4MZTJSR"
 };
 firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;