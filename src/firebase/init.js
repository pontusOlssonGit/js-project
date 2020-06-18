
import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBkq3p03u-emqeCpphJpd3KK06xisVe_QU",
    authDomain: "js-project-48865.firebaseapp.com",
    databaseURL: "https://js-project-48865.firebaseio.com",
    projectId: "js-project-48865",
    storageBucket: "js-project-48865.appspot.com",
    messagingSenderId: "467218725104",
    appId: "1:467218725104:web:36a04cd9e87ee3d03f2a35"
  };
  // Initialize Firebase
 
 
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 export default firebaseApp.firestore()