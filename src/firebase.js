import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC87080jhcd1bdJzzwQrJBHyEAdF7fzi-I",
  authDomain: "react-app-9d5ea.firebaseapp.com",
  projectId: "react-app-9d5ea",
  storageBucket: "react-app-9d5ea.appspot.com",
  messagingSenderId: "619243955409",
  appId: "1:619243955409:web:6bdd11ad325c4bd28bd1f0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;