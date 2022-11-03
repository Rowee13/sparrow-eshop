// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
	// auth,
	// signInWithGoogleRedirect,
	signInWithGooglePopup,
	createUserAuthDocument,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
	// useEffect(() => {
	// 	(async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocRef = await createUserAuthDocument(response.user);
	// 		}
	// 	})();
	// }, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserAuthDocument(user);
	};

	return (
		<div>
			<h1>Sigin Page</h1>
			<button onClick={logGoogleUser}>Sigin in with Google</button>
			{/* <button onClick={signInWithGoogleRedirect}>
				Sigin in with Google Redirect
			</button> */}
		</div>
	);
};

export default SignIn;
