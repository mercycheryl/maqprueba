import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5Ub1Y9NC5RDtGvnv3S6FcIIsVWeNioz8",
  authDomain: "maquetacheryl.firebaseapp.com",
  projectId: "maquetacheryl",
  storageBucket: "maquetacheryl.firebasestorage.app",
  messagingSenderId: "1072885053185",
  appId: "1:1072885053185:web:ae8fb001d57f9a270e4d00"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);