import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEltRC9gvl0Phu0sXxnsmqDS5Dbz4RIbY",
    authDomain: "catch-of-the-day-lucas-souza.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-lucas-souza.firebaseio.com"

  });

  const base = Rebase.createClass(firebaseApp.database());

  //this is a named export
  export {firebaseApp};

  //this is a default export
  export default base;

