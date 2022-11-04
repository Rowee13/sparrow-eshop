import { useState, useContext } from "react";

import {
	signInWithGooglePopup,
	createUserAuthDocument,
	userSignInWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../../button/button.component";
import { UserContext } from "../../../context/user.context";
import "./sign-in-form.styles.scss";

// ---------------------------------------------------------------------

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const handleChange = (evt) => {
		const { name, value } = evt.target;

		setFormFields({ ...formFields, [name]: value });
	};

	// const resetFormFields = () => {
	// 	setFormFields(defaultFormFields);
	// };

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserAuthDocument(user);
	};

	const signInUser = async (evt) => {
		evt.preventDefault();

		try {
			const { user } = await userSignInWithEmailAndPassword(
				email,
				password
			);
			setCurrentUser(user);
			console.log(user);
		} catch (err) {
			switch (err.code) {
				case "auth/wrong-password":
					alert("You input an incorrect password");
					break;
				case "auth/user-not-found":
					alert("You input an invalid email");
					break;
				default:
					console.log(err);
			}
		}
	};

	return (
		<div className="sign-in-container">
			<h1>Already have an account?</h1>
			<span>Sign in with email</span>
			<form onSubmit={signInUser}>
				<FormInput
					required
					label="Email"
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
				<FormInput
					required
					label="Password"
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType="google"
						onClick={signInWithGoogle}
					>
						Sign In with Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
