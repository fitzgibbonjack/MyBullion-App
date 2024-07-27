// Libraries
import React from "react";

// Components
import { Formik, Form } from "formik";
import Field from "../components/FormikField";
import { IonContent, IonToolbar, IonPage, IonHeader, IonButton, IonTitle, IonGrid, IonRow, IonCol, IonCardTitle, IonFooter, IonRouterLink } from "@ionic/react";

// Hooks
import { useState } from "react";

// Schemas & Types
import { LoginSchema } from "../schemas/authentication";
import { LoginObject } from "../types/authentication";

const Login: React.FC = () => {
	const [isLoading, setIsLoading] = useState<Boolean>(false);

	const initialValues = {
		email: "",
		password: "",
	};

	function handleLogin(values: LoginObject) {
		setIsLoading(true);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonGrid class="ion-padding">
					<IonRow>
						<IonCol size="12">
							<IonCardTitle>Log in</IonCardTitle>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol size="12">
							<Formik
								initialValues={initialValues}
								validationSchema={LoginSchema}
								validateOnChange={false}
								validateOnBlur={false}
								onSubmit={handleLogin}
							>
								{({ errors, touched }) => (
									<Form>
										<Field name="email" type="email" errors={errors} touched={touched} />
										<Field name="password" type="password" errors={errors} touched={touched} />

										<IonButton type="submit" className="ion-margin-top">
											Login
										</IonButton>
									</Form>
								)}
							</Formik>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

			<IonFooter>
				<IonGrid className="ion-padding">
					<IonRow>
						<IonCol size="12">
							<p>Don't have an account?</p>
							<IonRouterLink className="custom-link" routerLink="/signup">
								Sign up
							</IonRouterLink>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Login;
