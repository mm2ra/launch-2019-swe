import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4OD4xYnAioZtir_n8j3Cgg2K9A6JouAQ",
  authDomain: "example-firebase-b6414.firebaseapp.com",
  databaseURL: "https://example-firebase-b6414.firebaseio.com",
  projectId: "example-firebase-b6414",
  storageBucket: "example-firebase-b6414.appspot.com",
  messagingSenderId: "80730937061",
  appId: "1:80730937061:web:1baba7912f4c51cb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
