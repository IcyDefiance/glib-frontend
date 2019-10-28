import * as React from "react";
import { useParams } from "react-router";
import { from, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { useObservable } from "rxjs-hooks";
import { LayoutGrid } from "src/components/material/layout-grid/layout-grid";
import styled from "styled-components";

function fetchJson$(input: RequestInfo, init?: RequestInit): Observable<any> {
	return from(fetch(input, init)).pipe(switchMap(res => from(res.json())));
}

const Splash = styled.div`
	min-height: 348px;
	background-size: cover;
`;

const ProfileInfo = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
`;

const AvatarWrap = styled.div`
	width: 300px;
`;

const Avatar = styled.img`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

const DisplayName = styled.div`
	font-size: 1.5rem;
`;

const Faded = styled.div`
	color: #ccc;
`;

export const Profile: React.FC = () => {
	const { handle } = useParams();

	const profile = useObservable(() => fetchJson$(`https://dev.glib.app/?user=${handle}`));

	if (profile) {
		return (
			<>
				<Splash className="d-flex align-items-end" style={{ backgroundImage: `url(${profile.splashPic})` }}>
					<ProfileInfo className="d-flex p-3 w-100">
						<AvatarWrap className="flex-center position-relative mr-3">
							<Avatar src={profile.profilePic} className="img-fluid" />
						</AvatarWrap>
						<div>
							<DisplayName>{profile.displayName}</DisplayName>
							<div className="text-muted">
								{profile.name}@{profile.home}
							</div>
						</div>
					</ProfileInfo>
				</Splash>
				<br />
				<br />
				<code>{JSON.stringify(profile)}</code>
			</>
		);
	} else {
		return <>Loading...</>;
	}
};
