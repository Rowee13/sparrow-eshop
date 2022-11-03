import { useState } from "react";

import {
	userAuthWithEmailAndPassword,
	createUserAuthDocument,
} from "../../utils/firebase/firebase.utils";

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
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={signUpUser}>
				<label htmlFor="">Display Name</label>
				<input
					required
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
				/>
				<label htmlFor="">Email</label>
				<input
					required
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
				<label htmlFor="">Password</label>
				<input
					required
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>
				<label htmlFor="">Confirm Password</label>
				<input
					required
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
