import * as React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => (
	<>
		<Link to="/profile/Gargron@mastodon.social">Gargron@mastodon.social</Link>
		<br />
		<Link to="/profile/rms@gnusocial.no">rms@gnusocial.no</Link>
	</>
);
