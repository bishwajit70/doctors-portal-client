// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBabJeoqugERYAiNhIDQuW_fkFSvotk1vc",
  authDomain: "doctors-portal-796d6.firebaseapp.com",
  projectId: "doctors-portal-796d6",
  storageBucket: "doctors-portal-796d6.appspot.com",
  messagingSenderId: "155523911438",
  appId: "1:155523911438:web:d8f5294fcf59af0912915f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

