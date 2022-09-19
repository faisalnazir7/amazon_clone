// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDst0XHcbi6RhCOZdUtMPI7SE4OVit5g2s",
  authDomain: "clone-24c33.firebaseapp.com",
  projectId: "clone-24c33",
  storageBucket: "clone-24c33.appspot.com",
  messagingSenderId: "170700109856",
  appId: "1:170700109856:web:1ac1aacca295f29a866445"
};
export default firebaseConfig;

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, firebaseApp };