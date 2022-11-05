import { useState } from "react";

import {
	userAuthWithEmailAndPassword,
	createUserAuthDocument,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";

// ---------------------------------------------------------------------

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (evt) => {
		const { name, value } = evt.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signUpUser = async (evt) => {
		evt.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}

		try {
			const { user } = await userAuthWithEmailAndPassword(
				email,
				password
			);
			await createUserAuthDocument(user, { displayName });
			resetFormFields();
		} catch (err) {
			if (err.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log(err);
			}
		}
	};

	return (
		<SignUpContainer>
			<h1>Don't have an account?</h1>
			<span>Sign up with email</span>
			<form onSubmit={signUpUser}>
				<FormInput
					required
					label="Display Name"
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
				/>
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
				<FormInput
					required
					label="Confirm Password"
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
