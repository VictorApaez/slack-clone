import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcOk5lkte0diXbt6g8T52CK720AuFj498',
  authDomain: 'slack-clone-414.firebaseapp.com',
  projectId: 'slack-clone-414',
  storageBucket: 'slack-clone-414.appspot.com',
  messagingSenderId: '388797803229',
  appId: '1:388797803229:web:3b8f7d2f2a376071b48934',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();

// const name = doc(firestore, 'Name/L11HGNhUBpiA7Gy3dAA8');

// setDoc(name, { age: 12 });
