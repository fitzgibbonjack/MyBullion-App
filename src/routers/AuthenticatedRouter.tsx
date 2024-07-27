import React from "react";

// Components
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

// Pages
import Home from "../pages/Login";

export const AuthenticatedRouter: React.FC = () => (
	<IonReactRouter>
		<IonRouterOutlet id="main">
			<Route path="/" component={Home} exact />
		</IonRouterOutlet>
	</IonReactRouter>
);
