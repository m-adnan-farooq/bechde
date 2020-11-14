import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBHLBzDGAWVNHWEt3bKyZuw1HMKHQmFsuo",
    authDomain: "aw-khareedle.firebaseapp.com",
    databaseURL: "https://aw-khareedle.firebaseio.com",
    projectId: "aw-khareedle",
    storageBucket: "aw-khareedle.appspot.com",
    messagingSenderId: "147638024847",
    appId: "1:147638024847:web:d2286e2aa68e45d01a8efa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  };