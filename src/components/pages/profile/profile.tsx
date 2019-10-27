import * as React from "react";
import { useParams } from "react-router";
import { from, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { useObservable } from "rxjs-hooks";

function fetchJson$(input: RequestInfo, init?: RequestInit | undefined): Observable<any> {
	return from(fetch(input, init)).pipe(switchMap(res => from(res.json())));
}

export const Profile: React.FC = () => {
	const { id: name } = useParams();

	const profile = useObservable(() => fetchJson$(`https://dev.glib.app/?user=${name}`));

	return (
		<>
			Profile {name}
			<br />
			<br />
			<code>{JSON.stringify(profile)}</code>
		</>
	);
};