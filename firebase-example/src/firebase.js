import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEX1QdvXtO_0BExJi075wzRHYNHjSqvDw",
  authDomain: "fir-example-81021.firebaseapp.com",
  databaseURL: "https://fir-example-81021.firebaseio.com",
  projectId: "fir-example-81021",
  storageBucket: "fir-example-81021.appspot.com",
  messagingSenderId: "83380462190",
  appId: "1:83380462190:web:ec4a792fcd2ddaa6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
