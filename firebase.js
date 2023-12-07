// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ4CmqdCIUmyIQ43XERngK881wZTxK2SM",
  authDomain: "momentum-mate.firebaseapp.com",
  databaseURL: "https://momentum-mate-default-rtdb.firebaseio.com",
  projectId: "momentum-mate",
  storageBucket: "momentum-mate.appspot.com",
  messagingSenderId: "1066402884490",
  appId: "1:1066402884490:web:91e906503065684be47673",
  measurementId: "G-3W18YGVRDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authClient = getAuth(app);