// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDxr0N3tXWTJa81-hBUCT7iH-JZtMYI-j4",
	authDomain: "vanlife-f8a3d.firebaseapp.com",
	projectId: "vanlife-f8a3d",
	storageBucket: "vanlife-f8a3d.appspot.com",
	messagingSenderId: "1074970641585",
	appId: "1:1074970641585:web:fccaf94f5ee432e0a00e90",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const vansCollectionRef = collection(db, "vans")