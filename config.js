import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCPVN_H1w5U8DADwFG2lh3V1fZQ3OJtY58",
    authDomain: "book-santa-eebd0.firebaseapp.com",
    databaseURL: "https://book-santa-eebd0.firebaseio.com",
    projectId: "book-santa-eebd0",
    storageBucket: "book-santa-eebd0.appspot.com",
    messagingSenderId: "595946608528",
    appId: "1:595946608528:web:48967754bcb15bf7474515"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();