import * as React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Profile } from "./pages/profile/profile";
import { isElectron } from "common/util";

export const App: React.FC = () => {
	const routes = (
		<Switch>
			<Route path="/profile/:id">
				<Profile />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);

	// TODO: split into multiple entry points
	return isElectron() ? <HashRouter>{routes}</HashRouter> : <BrowserRouter>{routes}</BrowserRouter>;
};
