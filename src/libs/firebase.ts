// // lib/firebase.ts
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { app, auth, db, storage };

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6YcUe6UjUWi13G-HoL7PatGe8_C6pnj8",
  authDomain: "sourcehub-9d3b6.firebaseapp.com",
  projectId: "sourcehub-9d3b6",
  storageBucket: "sourcehub-9d3b6.firebasestorage.app",
  messagingSenderId: "260259592084",
  appId: "1:260259592084:web:e3f1c97dca89ee8ef4c181",
  measurementId: "G-7FK34PLK5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
