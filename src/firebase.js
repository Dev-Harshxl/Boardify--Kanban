import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBR7Oi5vRLA0QqpOwozNSpvHAyERU4d-iM",
  authDomain: "boardify-e1428.firebaseapp.com",
  projectId: "boardify-e1428",
  storageBucket: "boardify-e1428.appspot.com",
  messagingSenderId: "32661971084",
  appId: "1:32661971084:web:9115133df23f5ef36c1ba9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}
