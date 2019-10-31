import { isElectron } from "common/util";
import * as React from "react";
import { BrowserRouter, HashRouter, Link, Route, Switch } from "react-router-dom";
import { TopAppBar } from "./material/top-app-bar";
import { Home } from "./pages/home/home";
import { Profile } from "./pages/profile/profile";
import { TitleBar } from "./title-bar";

export const App: React.FC = () => {
	const inner = (
		<>
			{isElectron && <TitleBar />}
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
