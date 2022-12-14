import { useState } from "react";

import {
	signInWithGooglePopup,
	userSignInWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

// ---------------------------------------------------------------------

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleChange = (evt) => {
		const { name, value } = evt.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const signInUser = async (evt) => {
		evt.preventDefault();

		try {
			await userSignInWithEmailAndPassword(email, password);
			resetFormFields();
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
		<SignInContainer>
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
				<ButtonsContainer>
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Sign In with Google
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
