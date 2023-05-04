// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD8H53Rq_GqBHAK-7jIxbXsrpO5NpGiFsw",
  authDomain: "fir-assignment-10-d2367.firebaseapp.com",
  projectId: "fir-assignment-10-d2367",
  storageBucket: "fir-assignment-10-d2367.appspot.com",
  messagingSenderId: "962055675298",
  appId: "1:962055675298:web:73349a11e6af745cd4a6fb"
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;