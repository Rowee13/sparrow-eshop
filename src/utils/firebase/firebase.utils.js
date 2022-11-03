import { initializeApp } from "firebase/app";
import {
	getAuth,
	// signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

// ---------------------------------------------------------------------

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAtNfuDV9kUI-jrGf5SMne0ZFBZwvmPSaY",
	authDomain: "crown-clothing-app-b36da.firebaseapp.com",
	projectId: "crown-clothing-app-b36da",
	storageBucket: "crown-clothing-app-b36da.appspot.com",
	messagingSenderId: "338834424473",
	appId: "1:338834424473:web:05ce4e23734605f12a6e08",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
