// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzNE9ADF1cQifVGpRm9XJRMlb0d3dGKvo",
  authDomain: "amz-clone-7fa9b.firebaseapp.com",
  projectId: "amz-clone-7fa9b",
  storageBucket: "amz-clone-7fa9b.appspot.com",
  messagingSenderId: "449977641988",
  appId: "1:449977641988:web:4a95c6b3aeb38cf3fdd951",
  measurementId: "G-09CRPF7QMG"
};
export default firebaseConfig;

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, firebaseApp };