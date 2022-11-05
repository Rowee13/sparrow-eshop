// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
// 	// auth,
// 	// signInWithGoogleRedirect,
// 	signInWithGooglePopup,
// 	createUserAuthDocument,
// } from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../sign-up/sign-up-form.component";
import SignInForm from "../sign-in/sign-in-form.component";

import { AuthContainer } from "./auth.styles";

// ---------------------------------------------------------------------

const Authentication = () => {
	// useEffect(() => {
	// 	(async () => {
	// 		const response = await getRedirectResult(auth);
	// 		if (response) {
	// 			const userDocRef = await createUserAuthDocument(response.user);
	// 		}
	// 	})();
	// }, []);

	// const logGoogleUser = async () => {
	// 	const { user } = await signInWithGooglePopup();
	// 	await createUserAuthDocument(user);
	// };

	return (
		<AuthContainer>
			<SignInForm />
			<SignUpForm />
			{/* <button onClick={signInWithGoogleRedirect}>
				Sigin in with Google Redirect
			</button> */}
		</AuthContainer>
	);
};

export default Authentication;
