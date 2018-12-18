import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBQ5gQ9jifgG3ZsbL_0I0j4aaCshJJav8Q",
    authDomain: "cryptobackend-22fae.firebaseapp.com",
    databaseURL: "https://cryptobackend-22fae.firebaseio.com",
    projectId: "cryptobackend-22fae",
    storageBucket: "cryptobackend-22fae.appspot.com",
    messagingSenderId: "424877198224"
  };
  const fBase = firebase.initializeApp(config);
  const db = firebase.firestore()
  db.settings({ timestampsInSnapshots: true })

  export  default firebase
  export  {db}
