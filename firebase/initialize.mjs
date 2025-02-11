import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAECT4PgAB2d71uf8X9etOg56X7LcpA5ZY",
    authDomain: "sample-login-1ffac.firebaseapp.com",
    databaseURL: "https://sample-login-1ffac-default-rtdb.firebaseio.com/",
    projectId: "sample-login-1ffac",
    storageBucket: "sample-login-1ffac.firebasestorage.app",
    messagingSenderId: "618250370077",
    appId: "1:618250370077:web:d70e103c996318ed0ddaf4",
    measurementId: "G-NLMPMQWXE2"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, app, auth }