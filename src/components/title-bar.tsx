import * as React from "react";
import styled from "styled-components";
import { miClose, miMaximize, miMinimize } from "./icons/icons";
import { Button } from "./material/button";

declare function minimize(): void;
declare function maximize(): void;

const TitleWrap = styled.div`
	-webkit-app-region: drag;
	user-select: none;
	position: fixed;
	z-index: 2147483647;
	top: 0;
	right: 0;
	left: 0;
	background-color: #1a1a1a;

	* {
		-webkit-app-region: no-drag;
	}
`;

const TitleAdjust = styled.div`
	height: 32px;
`;

export const TitleBar: React.FC = () => {
	return (
		<>
			<TitleWrap className="d-flex justify-content-end">
				<Button type="button" dense tabIndex={-1} onClick={() => minimize()} className="text-muted">
					<Button.Icon icon={miMinimize} />
				</Button>
				<Button type="button" dense tabIndex={-1} onClick={() => maximize()} className="text-muted">
					<Button.Icon icon={miMaximize} />
				</Button>
				<Button type="button" dense tabIndex={-1} onClick={() => window.close()} className="text-muted">
					<Button.Icon icon={miClose} />
				</Button>
			</TitleWrap>
			<TitleAdjust />
		</>
	);
};
