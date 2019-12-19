import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyAeIUFUrgK0_jh1NvVOoxC3tJC4bwualz0",
  authDomain: "crown-db-6cf62.firebaseapp.com",
  databaseURL: "https://crown-db-6cf62.firebaseio.com",
  projectId: "crown-db-6cf62",
  storageBucket: "crown-db-6cf62.appspot.com",
  messagingSenderId: "74261189606",
  appId: "1:74261189606:web:0023d62d3cac2645f1bc27",
  measurementId: "G-8P4ZHNT49M"
};

firebase.initializeApp(config);

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;










// // import * as firebase from 'firebase/app';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const config={
//     apiKey: "AIzaSyAeIUFUrgK0_jh1NvVOoxC3tJC4bwualz0",
//     authDomain: "crown-db-6cf62.firebaseapp.com",
//     databaseURL: "https://crown-db-6cf62.firebaseio.com",
//     projectId: "crown-db-6cf62",
//     storageBucket: "crown-db-6cf62.appspot.com",
//     messagingSenderId: "74261189606",
//     appId: "1:74261189606:web:0023d62d3cac2645f1bc27",
//     measurementId: "G-8P4ZHNT49M"
//   };

//   firebase.initializeApp(config);

//   export const auth=firebase.auth();
//   export const firestore=firebase.firestore();

//   const provider=new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({prompt: 'select_account'});
//   export const signInWithGoogle=()=> auth.signInWithPopup(provider);

//   export default firebase;
