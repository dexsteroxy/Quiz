// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc2Oez-K07kU39EItZ2u6o3pr4ubY8xlg",
  authDomain: "quiz-app-24d0f.firebaseapp.com",
  projectId: "quiz-app-24d0f",
  storageBucket: "quiz-app-24d0f.appspot.com",
  messagingSenderId: "870217365383",
  appId: "1:870217365383:web:f5659f1d3bcb3561cb4522",
  measurementId: "G-L0MCXTF92R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
