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
	min-height: 448px;
	background-size: cover;
`;

const ProfileInfo = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	padding: 24px;
`;

const AvatarWrap = styled.div`
	width: 400px;
	margin-right: 24px;
`;

const Avatar = styled.img`
	position: absolute;
	bottom: 0;
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
					<ProfileInfo className="d-flex w-100">
						<AvatarWrap className="flex-center position-relative">
							<Avatar src={profile.profilePic} />
						</AvatarWrap>
						<div>
							<DisplayName>{profile.displayName}</DisplayName>
							<Faded>
								{profile.name}@{profile.home}
							</Faded>
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
