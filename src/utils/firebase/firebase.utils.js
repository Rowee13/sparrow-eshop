import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
// const firebaseApp =
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserAuthDocument = async (userAuth, additionalInfo = {}) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInfo,
			});
		} catch (error) {
			console.log("error creating the user", error);
		}
	}

	return userDocRef;
};

export const userAuthWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};
