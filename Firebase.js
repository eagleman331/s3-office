import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5qRTieYP86VlRwh-oAPccv4noB853eQs",
  authDomain: "testapp-644da.firebaseapp.com",
  projectId: "testapp-644da",
  storageBucket: "testapp-644da.appspot.com",
  messagingSenderId: "90327671916",
  appId: "1:90327671916:web:7f6b127a3d74655493e449"
};
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
