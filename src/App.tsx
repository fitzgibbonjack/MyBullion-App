import { IonApp, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.always.css";
import "@ionic/react/css/palettes/dark.class.css";
import "@ionic/react/css/palettes/dark.system.css";
import { AuthenticatedRouter } from "./routers/AuthenticatedRouter";
import { DefaultRouter } from "./routers/DefaultRouter";

setupIonicReact();

const App: React.FC = () => {
	const isLoggedIn = false;
	return <IonApp>{isLoggedIn ? <AuthenticatedRouter /> : <DefaultRouter />}</IonApp>;
};

export default App;
