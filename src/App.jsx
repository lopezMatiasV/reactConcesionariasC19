import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {RouterPages} from "./components/Router/Router";

export const App = () => {
	return (
		<div className="App">
        <RouterPages />
		</div>
	);
};
