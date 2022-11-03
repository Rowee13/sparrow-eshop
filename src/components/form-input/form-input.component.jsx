import "./form-input.styles.scss";

const FormInput = ({ label, ...formProps }) => {
	return (
		<div className="group">
			<input className="form-input" {...formProps} />
			{label && (
				<label
					className={`${
						formProps.value.length ? "shrink" : ""
					} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
