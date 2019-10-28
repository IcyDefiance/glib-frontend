import { isElectron } from "common/util";
import * as React from "react";
import { BrowserRouter, HashRouter, Link, Route, Switch } from "react-router-dom";
import { TopAppBar } from "./material/top-app-bar/top-app-bar";
import { Home } from "./pages/home/home";
import { Profile } from "./pages/profile/profile";

export const App: React.FC = () => {
	const inner = (
		<>
			<TopAppBar dense>
				<TopAppBar.Title>
					<Link to="/">Glib</Link>
				</TopAppBar.Title>
			</TopAppBar>
			<Switch>
				<Route path="/profile/:handle">
					<Profile />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);

	// TODO: split into multiple entry points
	return isElectron() ? <HashRouter>{inner}</HashRouter> : <BrowserRouter>{inner}</BrowserRouter>;
};
