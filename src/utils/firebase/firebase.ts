import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const { EmailAuthProvider, GoogleAuthProvider } = firebase.auth;

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGEING_SENDER_ID,
  appId: process.env.APP_ID
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
