import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh82XbSkWjUFYSq8VlGYw9jisZIigkoF0",
  authDomain: "lego-25470.firebaseapp.com",
  projectId: "lego-25470",
  storageBucket: "lego-25470.appspot.com",
  messagingSenderId: "833356325401",
  appId: "1:833356325401:web:0a1751337263fb0da00088",
};

const app = initializeApp(firebaseConfig);

export const dbFirebase = getFirestore(app);
