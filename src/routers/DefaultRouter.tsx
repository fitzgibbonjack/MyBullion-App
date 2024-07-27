import React from "react";

// Components
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

// Pages
import Login from "../pages/Login";

export const DefaultRouter: React.FC = () => (
	<IonReactRouter>
		<IonRouterOutlet id="main">
			<Route path="/" component={Login} exact />
		</IonRouterOutlet>
	</IonReactRouter>
);
