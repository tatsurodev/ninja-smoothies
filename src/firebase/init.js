import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB9LgkgJpguJ8D8KRITK7oUlKwMftGs__w",
  authDomain: "udemy-ninja-smoothies-e1b3c.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-e1b3c.firebaseio.com",
  projectId: "udemy-ninja-smoothies-e1b3c",
  storageBucket: "udemy-ninja-smoothies-e1b3c.appspot.com",
  messagingSenderId: "539387198059",
  appId: "1:539387198059:web:a13ed61cf800347d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({
//   timestampsInSnapshots: true
// });

//export firestore database
export default firebaseApp.firestore();
