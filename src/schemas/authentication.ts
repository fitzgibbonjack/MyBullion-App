// Libraries
import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email("Given value is not a valid email")
		.required("Required"),
	password: Yup.string()
		.required("Required")
		.min(8, "Must be at least 8 characters")
		.max(32, "Must be no longer than 32 characters"),
});
