import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBAUI5wPOTG3H78jpoAv8nIoFKffDCM0bk",
  authDomain: "idea-app-b57a9.firebaseapp.com",
  databaseURL: "https://idea-app-b57a9.firebaseio.com",
  projectId: "idea-app-b57a9",
  storageBucket: "idea-app-b57a9.appspot.com",
  messagingSenderId: "10799832846",
  appId: "1:10799832846:web:a463032145f65d559f815f",
  measurementId: "G-ZLD4PJY3GR"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
