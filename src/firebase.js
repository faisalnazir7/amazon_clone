// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "########################",
  authDomain: "amz-clone######################",
  projectId: "amz-clone-##########################",
  storageBucket: "amz-clone-##################",
  messagingSenderId: "44###################",
  appId: "1:449977641988:web:4a9#########################",
  measurementId: "G-#####################"
};
export default firebaseConfig;

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, firebaseApp };
