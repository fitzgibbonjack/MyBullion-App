import React from "react";

// Components
import { Field } from "formik";

// Types
import { FieldAttributes } from "formik";

interface FormikFieldProps extends FieldAttributes<any> {
	errors: { [key: string]: string };
	touched: { [key: string]: boolean };
}

const FormikField: React.FC<FormikFieldProps> = ({ name, type, errors, touched }) => {
	return (
		<div className="formik-field">
			<Field name={name} type={type} />
			{errors[name] && touched[name] ? <div>{errors[name]}</div> : null}
		</div>
	);
};

export default FormikField;
