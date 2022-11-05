import { FormInputLabel, Input, Group } from "./form-input.styles";

// ---------------------------------------------------------------------

const FormInput = ({ label, ...formProps }) => {
	return (
		<Group>
			<Input {...formProps} />
			{label && (
				<FormInputLabel shrink={formProps.value.length}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
