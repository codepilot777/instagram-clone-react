import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';

// here is where I want to call the seed file (only ONCE!)
import { seedDatabase } from '../seed'

const firebaseConfig = {
  apiKey: "AIzaSyCb8TbnqTXzILRZKE2MC5YlAj4KdZrv14I",
  authDomain: "instagram-clone-f858d.firebaseapp.com",
  projectId: "instagram-clone-f858d",
  storageBucket: "instagram-clone-f858d.appspot.com",
  messagingSenderId: "153835861166",
  appId: "1:153835861166:web:72fa7a5b92f2886abea93f"
};

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase)
export const auth = getAuth(firebase);
export const UserSignInWithEmailAndPassword = async (email, password) => {
  try {
    const UserCredential = await signInWithEmailAndPassword(auth, email,password);
    return UserCredential.user
  } catch (err) {
    console.log(err)
  }
} 

export const UserSignUpIwthEmailAndPassword = async (email, password) => {
  try {
    const UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    return UserCredential.user
  } catch (err) {
    console.log(err)
  }
}
// export const { FieldValue } = firestore;

// here is where I want to call the seed file (only ONCE!)
seedDatabase(db)

